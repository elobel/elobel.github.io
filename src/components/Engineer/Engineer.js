import React from 'react';
import "./Engineer.css"
import { Link } from 'react-router-dom';
import LinkList from '../LinkList/LinkList'

function Engineer() {
  return (
    <div className="engineerDiv">
      <h1 className="emilyHeading engineerText">emily lobel</h1>
      <h2 className="rainbowText">nice to meet you :)</h2>
      <p className="engParagraph">i was most recently an engineer at&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.ellevest.com/"
          className="ellevestLink">
            ellevest
          </a>
      </p>
      <p className="engParagraph">i've previously worked at&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.buzzfeed.com/"
          className="buzzFeedLink">
            buzzfeed
        </a>
      &nbsp;and&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://girlswhocode.com/"
          className="gwcLink">
            girls who code
        </a>
      </p>
      <p className="engParagraph">i'll show you the actor bit if you pay the karaoke tab</p>
      <LinkList listType="engineer" />
      <p>
        <Link to="/" className="actorText">&lt; home</Link>
      </p>
    </div>
  );
}

export default Engineer;