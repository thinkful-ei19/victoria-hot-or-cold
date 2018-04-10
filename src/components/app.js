import React from 'react';

import Game from './game';
import Feedback from './feedback';
import Nav from './nav';

export default function App(){
  return (
        <div>
          <Nav onNewGameClick = {onNewGame}/>
          <Game />
          <Feedback />
        </div>
  )
}

const onNewGame = function(){
  console.log('new game')
}
