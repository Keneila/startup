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