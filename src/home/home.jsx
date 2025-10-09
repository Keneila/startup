import React from 'react';
import { NavLink } from 'react-router-dom';

export function Home() {
  return (
    <div>
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
   
    <main>
      <section className="container ">
        <div><img id="neuro" className="float-start img-fluid" src="https://cdn.pixabay.com/photo/2016/02/10/20/00/symbol-of-infinity-of-autism-1192408_1280.png" alt="random" /></div>
        
        <h2>Welcome to RAD Education</h2>
      
        <p>RAD Education is a revolutionary supplemental learning platform designed specifically for K-12
         students and parents of said students who struggle with traditional learning methods.
         We use adaptive engagement technology to personalize learning experiences, particularly for neurodivergent
         individuals, transforming how students engage with educational content.</p>
        <p>
            RAD Education is a supplemental learning software platform that serves parents and homeschooling educators in K-12 and higher education. 
            Unlike generic educational apps or traditional textbook-based learning platforms like Khan Academy, 
            RAD uses adaptive engagement technology that personalizes learning and matches individual learning styles.
        </p>
        <p>Our platform addresses the critical need for educational resources tailored to students who struggle with low engagement
             and poor learning outcomes from traditional teaching methods. By focusing specifically on neurodivergent learners, 
             we're filling a gap in the educational technology market.
        </p>
        <p>
            Please log in as a Student or Educator to access your personalized
            dashboard.
        </p>

         <div><img className="picture" src="https://www.loopearplugs.com/cdn/shop/articles/Child_Studying.jpg?v=1702892658" alt="random" /></div>
      </section>
    </main>
    </div>
  );
}