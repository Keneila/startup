import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function Register(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  async function createMainUser() {
    localStorage.setItem('userName', userName);
    const user = { mainName: userName, email: email, students: [] };

    let users = [];
    const usersText = localStorage.getItem('users');
    if (usersText) {
      users = JSON.parse(usersText);
    }
    let found = false;
    for (const [i, prevUser] of users.entries()) {
      if (prevUser.email === email) {
        found = true;
        break;
      }
    }

    if (!found) {
      users.push(user);
    }
    localStorage.setItem('users', JSON.stringify(users));

    props.onLogin(userName);
  }

  async function createStudent() {
    localStorage.setItem('userName', userName);
    const user = { mainName: userName, email: email};

    let users = [];
    const usersText = localStorage.getItem('users');
    if (usersText) {
      users = JSON.parse(usersText);
    }
    let found = false;
    for (const [i, prevUser] of users.entries()) {
      if (prevUser.email === email) {
        found = true;
        prevUser.students.push(userName);
        break;
      }
    }
    localStorage.setItem('users', JSON.stringify(users));

    props.onLogin(userName);
  }

  function switchTabEducator(event) {
            const tabs = document.querySelectorAll('.nav-link');
            tabs.forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');

            const which = document.getElementById('educator');
            which.classList.add('show','active');
            const other = document.getElementById('student');
            other.classList.remove('show','active');
           
        }

  function switchTabStudent(event) {
            const tabs = document.querySelectorAll('.nav-link');
            tabs.forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');

            const which = document.getElementById('student');
            which.classList.add('show','active');
            const other = document.getElementById('educator');
            other.classList.remove('show','active');
           
        }



  return (
    <div>
              <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                <h1 className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" id="logo">RAD Education</h1>
                    <nav>
                        <menu className="nav nav-tabs col-md-auto mb-2 justify-content-center mb-md-0">
                            <li><NavLink to="/" className="nav-link px-2 link-dark">Home</NavLink></li>
                            <li><NavLink to="/login" className="nav-link px-2 link-dark">Educators</NavLink></li>
                            <li><NavLink to="/student" className="nav-link px-2 link-dark">Students</NavLink></li>
                        </menu>
                    </nav>
                    <div className="text-end">
                        <NavLink to="/register" className="btn btn-outline-primary me-2">Sign Up</NavLink>
                    </div>
                    <hr />
              </header>
    <main>
        <h1 className="login-title">Register Account</h1>
        <div className="container justify-content-center mb-4 login">
          <form method="get" action="/parent">

              <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#educator" type="button" role="tab" aria-controls="educator" aria-selected="true" onClick={() => switchTabEducator(event)}>Educator</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#student" type="button" role="tab" aria-controls="student" aria-selected="false" formaction="/child" onClick={() => switchTabStudent(event)}>Student</button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="educator" role="tabpanel" aria-labelledby="home-tab">
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input className="form-control" type="text" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)}  />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input className="form-control" type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)}  />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input className="form-control" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                  </div>
                  <Button variant='primary' onClick={() => createMainUser()} disabled={!userName || !password || !email} type='submit'>Register</Button>
                  <code></code>
                </div>
                <div className="tab-pane fade" id="student" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="mb-3">
                    <label className="form-label">Educator's Email address</label>
                    <input className="form-control" type="text" placeholder="educators@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input className="form-control" type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input className="form-control" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <Button variant='primary' onClick={() => createStudent()} disabled={!userName || !password || !email} type="submit" formaction="/child">Register</Button>
                  <code></code>
                </div>
                </div>
        </form>
      </div>
    
    </main>
    </div>
  );
}