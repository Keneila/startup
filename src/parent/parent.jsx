import React from 'react';
import { NavLink } from 'react-router-dom';

export function Parent() {
  return (
    <div>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <h1 className="d-flex align-items-center  mb-2 mb-md-0 text-dark text-decoration-none" id="logo">RAD Education</h1>
        <h3 className="mb-md-0 menu"> Welcome, Educator</h3>
        <nav >
          <menu className="nav nav-tabs col-md-auto mb-2 justify-content-center mb-md-0">
            <li><NavLink to="/parent" className="nav-link px-2 link-dark">Student 1</NavLink></li>
            <li><NavLink to="/parent" className="nav-link px-2 link-dark">Student 2</NavLink></li>
            <li><NavLink to="/register" className="nav-link px-2 link-dark">Add Student</NavLink></li>
          </menu>
        </nav>
        <div className="text-end">
           <NavLink to="/" className="btn btn-outline-primary me-2">Logout</NavLink>
        </div>
        <hr />
      </header>
<main>
      <div className="container">
        <h3> Updates</h3>
        <div className="alert alert-success" role="alert">
        Student 1 completed Math Quiz 1 with a score of 100%
        </div>
        <div className="alert alert-danger" role="alert">
        Student 2 completed Literature Quiz 1 with a score of 50%
        </div>
      </div>

        <div className="container mb-3">
        <h2 className="text-center">Student 1's Subjects</h2>
        <nav className=" d-flex flex-wrap justify-content-center gap-3">

            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Math</h5>
                <p className="card-text"> 5th Grade Algebra Resources</p>
                <NavLink to="/trivia" className="btn btn-primary">Browse</NavLink>
              </div>
            </div>
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Literature</h5>
                <p className="card-text">5th Grade Literature Resources</p>
                <NavLink to="/trivia" className="btn btn-primary">Browse</NavLink>
              </div>
            </div>
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">History</h5>
                <p className="card-text">5th Grade History Resources</p>
                <NavLink to="/trivia" className="btn btn-primary">Browse</NavLink>
              </div>
            </div>
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Science</h5>
                <p className="card-text">5th Grade Science Resources</p>
                <NavLink to="/trivia" className="btn btn-primary">Browse</NavLink>
              </div>
            </div>
        </nav>
      </div>
    </main>
    </div>
  );
}