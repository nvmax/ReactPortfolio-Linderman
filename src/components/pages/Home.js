import React from 'react';
import '../styles.css';
import Hero from "./Hero";


function Home() {
  return (

    <div className="mainprofile">
      <div className="containerhome">
        <div className="row">
          <div className="col-md">
            <Hero />
          </div>
          <div className="col-md">
            <h1 className="Port-index">About Me</h1>
            <p className="lead">I am a full stack web developer with a background in Technical Support and Management. I am a upcoming graduate of the University of Utah Coding Bootcamp. I am proficient in HTML, CSS, JavaScript, jQuery, Node.js, Express.js, MySQL, MongoDB, React.js, and Bootstrap. I am currently looking for a full time position as a web developer.</p>
            <p className="lead">
              My goal is to become a full stack web developer and to work on a team of developers to create amazing web applications.   Backend development is my passion and I am currently working on my skills in that area.
            </p>
            <p className="lead">
              I love diving and currently advanced certified, traveling to new places. I have traveled to 39 countries on 5 continents and I am always looking for my next adventure. 
            </p>
            <p className="lead">
              Last few years I have been traveling the world and visiting amazing places.
              I have two wonderful chidlren Sophia and Hazen, and a beautiful wife Corinne, who supports me in everything I do.
            </p>

          </div>
          <div className="col-md">
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;