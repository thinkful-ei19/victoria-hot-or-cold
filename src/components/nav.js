import React from 'react';
import './nav.css';

export default function Nav(props) {
  // function newGame(triger){
  //   event.preventDefault();
  // }

  return (
      <nav>
        <ul className='navBar'>
          <li>
            <a href="#" className="what">
              WHAT?
            </a>
          </li>

          <li>
            <a href="#" type="button" onClick={props.onNewGameClick} className="new">
              New Game
            </a>
          </li>
        </ul>
      </nav>
  )
}
