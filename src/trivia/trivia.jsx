import React from 'react';
import { NavLink } from 'react-router-dom';

export function Trivia() {
  return (
    <div>
    <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
            <h1 className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" id="logo">RAD Education</h1>
            <h3 className="menu"> Welcome Username</h3>
            <div className="text-end">
                <NavLink to="/" className="btn btn-outline-primary me-2">Logout</NavLink>
              </div>
          </header>
    </div>
    <main>
      <div className="container text-center">
        <div>
        <h2>Trivia Game</h2>
        <p className="text-center"> Which is the capital of France?</p>
        </div>
        <div className="d-flex justify-content-center">
        <table>
          <tr>
            <td>
              <button className="btn btn-success">
                A. Paris
              </button>
            </td>
            <td>
              <button className="btn btn-outline-secondary">
               B. London
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="btn btn-outline-secondary">
               C. Berlin
              </button>
            </td>
            <td>
              <button className="btn btn-outline-secondary">
               D. Madrid
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div className="d-flex justify-content-center mt-4 triv">
        <div className="score">
        ---
        </div>
        <div>
        <button className="btn btn-primary mb-4">Restart</button>
        </div>
      </div>
      </div>
    </main>
    </div>
  );
}