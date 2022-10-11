import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import LinkList from '../LinkList/LinkList'
import './Actor.css'

function Actor() {
  const [buttonClicks, increaseButtonClicks] = useState(0);
  const [socialMediaText, setSocialMediaText] = useState(
    "i continue to be creative after work hours, mostly on "
  )

  const handleClick = () => {
    increaseButtonClicks(buttonClicks + 1);
    if (buttonClicks === 0){
      setSocialMediaText("lolll this is my professional website! i can't make it that easy to find my ");
    }
    if (buttonClicks >= 2){
      setSocialMediaText("lmaooo for real i'm not telling you my ")
    }
    if (buttonClicks >= 7){
      setSocialMediaText("you're so persistent ")
    }
    if (buttonClicks >= 12){
      setSocialMediaText("ok, if you keep clicking, i'll tell you my ")
    }
    if (buttonClicks >= 20){
      setSocialMediaText("fine fine!!!! its linked to my insta now.. u crazy girl :) ")
    }
    if (buttonClicks >= 21) {
      window.open("https://www.instagram.com/emlylobl/")
    }
  };

  return (
    <div className="actorDiv">
      <h1 className="emilyHeading actorText">emily lobel</h1>
      <h2 className="rainbowText">nice to meet you :)</h2>
      <p className="actorParagraph">i studied theater for 15 years at many places</p>
      <span className="actorParagraph">{socialMediaText}
      {/* am i introducing a potential a11y issue here with this fake a tag... maybe */}
      {/* eslint-disable-next-line */}
        <a
          href="#"
          className="socialButton"
          tabIndex={0}
          onClick={handleClick}>
          social media
        </a>
      </span>
      <p className="actorParagraph">if you are a possible collaborator, please reach out!</p>
      <LinkList listType="actor"/>
      <p>
        <Link to="/" className="engineerText">&lt; home</Link>
      </p>
    </div>
  );
}

export default Actor;