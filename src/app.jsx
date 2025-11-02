import React from 'react';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home.jsx';
import { Login } from './login/login.jsx';
import { Child } from './child/child.jsx';
import { Parent } from './parent/parent.jsx';
import { Register } from './register/register.jsx';
import { Trivia } from './trivia/trivia.jsx';
import { Student } from './student/student.jsx';

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className="body">
        <div className="container">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login 
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
                onLogin={(loginUserName) => {
                  onAuthChange(loginUserName, AuthState.Authenticated);
            }}
            />} />
              <Route path="/child" element={<Child userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />} />
              <Route path="/parent" element={<Parent userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />} />
              <Route path="/register" element={<Register 
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
                onLogin={(loginUserName) => {
                  onAuthChange(loginUserName, AuthState.Authenticated);
            }}
            />} />
              <Route path="/trivia" element={<Trivia userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)}/>} />
              <Route path="/student" element={<Student
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
                onLogin={(loginUserName) => {
                  onAuthChange(loginUserName, AuthState.Authenticated);
            }}
            />} />
              <Route path='*' element={<NotFound />} />
            </Routes>

        </div>

        <div className="container-fluid border-top bg-light footer">
        <footer className="container d-flex justify-content-center justify-content-md-between py-3 my-4">
            <p className="text-center py-2 mb-md-0 author">Author: Keneila Hatch</p>
            <a className="btn btn-outline-primary github" href="https://github.com/Keneila/startup.git">GitHub</a>
        </footer>
        </div>
    
    </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}