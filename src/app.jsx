import React from 'react';
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
  return (
    <BrowserRouter>
      <div className="body">
        <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
            <h1 className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" id="logo">RAD Education</h1>
            <nav>
              <menu className="nav nav-tabs col-md-auto mb-2 justify-content-center mb-md-0">
                <li><NavLink to="/" className="nav-link active px-2 link-dark">Home</NavLink></li>
                <li><NavLink to="/login" className="nav-link px-2 link-dark">Educators</NavLink></li>
                <li><NavLink to="/student" className="nav-link px-2 link-dark">Students</NavLink></li>
              </menu>
            </nav>
            <div className="text-end">
              <NavLink to="/register" className="btn btn-outline-primary me-2">Sign Up</NavLink>
            </div>
            <hr />
          </header>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/child" element={<Child />} />
              <Route path="/parent" element={<Parent />} />
              <Route path="/register" element={<Register />} />
              <Route path="/trivia" element={<Trivia />} />
              <Route path="/student" element={<Student />} />
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