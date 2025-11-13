const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const scoreCollection = db.collection('score');
const educatorCollection = db.collection('educator');
db
// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUserByEmail(email) {
  return userCollection.findOne({ email: email });
}

function getUser(username) {
  return userCollection.findOne({ username: username });
}

function getEducatorByEmail(email) {
  return educatorCollection.findOne({ email: email });
}

function getEducator(username) {
  return educatorCollection.findOne({ username: username });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function addEducator(educator) {
  await educatorCollection.insertOne(educator);
}

async function updateUser(user) {
  await userCollection.updateOne({ username: user.username }, { $set: user });
}

async function addScore(score) {
  return scoreCollection.insertOne(score);
}

function getHighScores() {
  const query = { score: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  getUser,
  addEducator,
  getEducatorByEmail,
  getEducator,
  getUserByEmail,
  getUserByToken,
  addUser,
  updateUser,
  addScore,
  getHighScores,
};
