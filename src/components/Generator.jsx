import React from 'react';
import decoration from '../assets/decoration.png';
import dice from '../assets/dice.png';

function Generator() {
  return (
    <div className='generator'>
        <h1>ADVICE #117</h1>
        <p>“It is easy to sit up and take notice, what's difficult is getting up and taking action.”</p>
        <img id='deco' src={decoration} alt='decoration' />
        <img id='dice' src={dice} alt='dice' />
    </div>
  )
}

export default Generator
