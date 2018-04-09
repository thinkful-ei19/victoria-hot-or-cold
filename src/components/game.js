import React from 'react';
import './game.css';

export default function Game(){
  return (
    <div className="game">
      <h1>HOT or COLD</h1>
      <form>
      <legend>Make your Guess!</legend>
      <p>
        <input type="text" className="userInput" placeholder="Enter Your Guess"/>
      </p>
      <button type="submit" name="submit" id="guessButton" className="button">
          Guess
        </button>
      <p className="guessCount">
        <span>Guess #</span> !
      </p>
      </form>
    </div>
  )
}
