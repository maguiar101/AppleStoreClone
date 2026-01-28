import React from 'react'
import './Phone.css'
import iPhone from '../assets/images/phone.png'



function Phone() {
  return (
    <div className='mainPhone'>
      <h1 className='mainTitle'>iPhone</h1>
      <p className="mainText">Meet the iPhone 16 family.</p>
      <div className='buttons'>
        <button className='learnMore'>Learn more</button>
        <button className='shopIphone'>Shop iPhone</button>
      </div>
      <h2 className='appleText'>Built for Apple Intelligence.</h2>
      <img className='phoneImage' src={iPhone} alt="iPhone" />
    </div>
  )
}

export default Phone
