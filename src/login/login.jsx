import React from 'react';
import { NavLink } from 'react-router-dom';

export function Login() {
  return (
    <main>
      <h1 className="login-title">Educator Login</h1>
      <div className="container justify-content-center mb-4 login">
      <form method="get" action="/parent">
          <div className="mb-3">
              <label className="form-label">Email address</label>
              <input className="form-control" type="text" placeholder="your@email.com" />
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
  );
}