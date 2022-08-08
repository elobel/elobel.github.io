import React from 'react';
import './LinkList.css'
import engResume from './engResume.pdf'
import actorResume from './actorResume.pdf'

function ResumeLink(props) {
  const resType = props.resType;

  if (resType === 'engineer') {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={engResume}
        className="linkTextEngineer">
          resume
      </a>
    )
  } else {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={actorResume}
        className="linkTextActor">
          resume
      </a>
    )
  }
}

export default ResumeLink;