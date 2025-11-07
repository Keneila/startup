import React from 'react';
import { NavLink } from 'react-router-dom';

export function Child(props) {

  function logout() {
     fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  return (
    <div>
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <h1 className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" id="logo">RAD Education</h1>
        <h3 className="menu"> Welcome {props.userName}</h3>
        <div className="text-end">
            <NavLink to="/" className="btn btn-outline-primary me-2" onClick={() => logout()}>Logout</NavLink>
          </div>
      </header>
    </div>
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
    </div>
  );
}