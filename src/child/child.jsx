import React from 'react';
import { NavLink } from 'react-router-dom';

export function Child() {
  return (
 <main>
      <div className="container mb-3">
        <h2 className="text-center">Available Subjects</h2>
        <nav className=" d-flex flex-wrap justify-content-center gap-3">

            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Math</h5>
                <p className="card-text"> 5th Grade Algebra</p>
                <NavLink to="/trivia" className="btn btn-primary">Start Course</NavLink>
              </div>
            </div>
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Literature</h5>
                <p className="card-text">5th Grade Literature</p>
                <NavLink to="/trivia" className="btn btn-primary">Start Course</NavLink>
              </div>
            </div>
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">History</h5>
                <p className="card-text">5th Grade History</p>
                <NavLink to="/trivia" className="btn btn-primary">Start Course</NavLink>
              </div>
            </div>
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Science</h5>
                <p className="card-text">5th Grade Science</p>
                <NavLink to="/trivia" className="btn btn-primary">Start Course</NavLink>
              </div>
            </div>
        </nav>
      </div>
    </main>
  );
}