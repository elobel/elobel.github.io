import React from 'react';
import ResumeLink from './ResumeLink'
import './LinkList.css'

function LinkList(props) {
  let linkStyles = '';
  let linkText = []
  let linkUrls = []
  
  if (props.listType === 'engineer') {
    linkStyles = 'linkTextEngineer';
    linkText = [
      'linkedin',
      'github',
      'email',
    ]
    linkUrls = [
      "https://www.linkedin.com/in/elobel/",
      "https://github.com/elobel/",
      "mailto:emilyglobel@gmail.com",
    ]
  } else {
    linkStyles = 'linkTextActor';
    linkText = [
      'linkedin',
      'npx',
      'email'
    ]
    linkUrls = [
      "https://www.linkedin.com/in/elobel/",
      "https://newplayexchange.org/users/20501/emily-lobel",
      "mailto:emilyglobel@gmail.com",
    ]
  }

  return (
    <div>
      <ul className="linkList">
        <li>
          <ResumeLink resType={props.listType} />
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={linkUrls[0]}
            className={linkStyles}>
              {linkText[0]}
            </a>
          </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={linkUrls[1]}
            className={linkStyles}>
              {linkText[1]}
            </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={linkUrls[2]}
            className={linkStyles}>
              {linkText[2]}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default LinkList;