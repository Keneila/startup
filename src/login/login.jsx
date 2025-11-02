import React from 'react';
import { NavLink } from 'react-router-dom';

export function Login() {
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
      <h1 className="login-title">Educator Login</h1>
      <div className="container justify-content-center mb-4 login">
      <form method="get" action="/parent">
          <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input className="form-control" type="text" placeholder="Username" />
                  </div>
          <div className="mb-3">
              <label className="form-label">Password</label>
              <input className="form-control" type="password" placeholder="Password" />
          </div>
          <button className="btn btn-primary" type="submit">Login</button>
      </form>
      <div className="border-top m-2"></div>
      <NavLink className="dropdown-item hoverlight" to="/register">New around here? Sign up</NavLink>
      </div>
    </main>
    </div>
  );
}