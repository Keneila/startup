import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="body">
        <div className ="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <h1 className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" id="logo">RAD Education</h1>
        <nav>
          <menu className="nav nav-tabs col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="index.html" className="nav-link active px-2 link-dark">Home</a></li>
            <li><a href="login.html" className="nav-link px-2 link-dark">Educators</a></li>
            <li><a href="childLog.html" className="nav-link px-2 link-dark">Students</a></li>
          </menu>
        </nav>
        <div className="text-end">
           <a href="register.html" className="btn btn-outline-primary me-2">Sign Up</a>
        </div>
        <hr />
      </header>
      <main>
      Components Here 
        </main>
    </div>

        <div className="container-fluid border-top bg-light footer">
        <footer className="container d-flex justify-content-center justify-content-md-between py-3 my-4">
            <p className="text-center py-2 mb-md-0 author">Author: Keneila Hatch</p>
            <a className= "btn btn-outline-primary github" href="https://github.com/Keneila/startup.git">GitHub</a>
        </footer>
        </div>
    
    </div>
  );
}