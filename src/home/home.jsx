import React from 'react';

export function Home() {
  return (
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
  );
}