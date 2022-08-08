import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

function Home() {
  return (
    <div className="homeDiv">
      <h1 className="emilyHeading">emily lobel</h1>
      <h2 className="floatingHi">hi :)</h2>
      <p className="iamParagraph">i am a&nbsp;
        <Link to="/engineer" className="engineerText">
          software engineer
        </Link>
      </p>
      <p className="iamParagraph">i am also an&nbsp;
        <Link to="/actor" className="actorText">
          actor
        </Link>
      </p>
    </div>
  );
}

export default Home;