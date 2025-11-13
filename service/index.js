const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

let users = [];
let scores = [];
let educators = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);


// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// CreateAuth a new educator
apiRouter.post('/auth/e-create', async (req, res) => {
  if (await findUser('username', req.body.username)) {
      res.status(409).send({ msg: 'Existing user' });
  } else {
    if (await findUser('email', req.body.email)) {
      res.status(409).send({ msg: 'Existing email, aready has a listed Educator' });
    } else {
    const user = await createUser(req.body.username, req.body.email, req.body.password);
    await createEducator(req.body.username, req.body.email);
    setAuthCookie(res, user.token);
    res.send({ username: user.username, email: user.email });
    }
  }
});

// CreateAuth a new student
apiRouter.post('/auth/s-create', async (req, res) => {
  if (await findUser('username', req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    if (await findUser('email', req.body.email)) {
      const user = await createUser(req.body.username, req.body.email, req.body.password);
      setAuthCookie(res, user.token);
      res.send({ username: user.username, email: user.email });
    } else {
      res.status(409).send({ msg: 'No Educator found' });
    }
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/s-login', async (req, res) => {
  const user = await findUser('username', req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
        user.token = uuid.v4();
        setAuthCookie(res, user.token);
        res.send({ username: user.username, email: user.email });
        return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// GetAuth login an existing educator
apiRouter.post('/auth/e-login', async (req, res) => {
  const user = await findUser('username', req.body.username);
  const educator = await findEducator('username', req.body.username);
  if (user && educator) {
    if (await bcrypt.compare(req.body.password, user.password)) {
        user.token = uuid.v4();
        setAuthCookie(res, user.token);
        res.send({ username: user.username, email: user.email });
        return;
    }
  } 
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetScores
apiRouter.get('/scores', verifyAuth, async (_req, res) => {
  /*userScores = [];
  const user = await findUser('username', req.body.username);
  for (const score of scores) {
    if (score.email === user.email) {
      userScores.push(score);
    }
  }*/
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', verifyAuth, (req, res) => {
  scores.push(req.body);
  res.send(scores);
});


async function createUser(username, email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await DB.addUser(user)
  //users.push(user);

  return user;
}

async function createEducator(username, email) {
  const educator = {
    username: username,
    email: email,
  };
  await DB.addEducator(educator)
  educators.push(educator);
  return educator;
}

async function findUser(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}
async function findEducator(field, value) {
  if (!value) return null;

  return educators.find((e) => e[field] === value);
}


// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});