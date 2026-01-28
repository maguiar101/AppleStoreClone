import React from 'react'
import './Macbook.css'
import macbookAir from '../assets/images/macbookAir.png'


function Macbook() {
  return (
      <div className='mainMacbook'>  
        <h1 className='mainTitle'>MacBook Air</h1>
        <p className="mainText">Sky blue color.</p>
        <p className="mainText">Sky high performance with M4.</p>
        <div className='buttons'>
          <button className='learnMore'>Learn more</button>
          <button className='buy'>Buy</button>
        </div>
        <img className='macbookImage' src={macbookAir} alt="MacBook Air" />
        <h2 className='appleText'>Built for Apple Intelligence.</h2>
      </div>
  )
}

export default Macbook

