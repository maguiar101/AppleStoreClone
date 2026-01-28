import React from 'react';
import './Watch.css';
import { FaApple } from "react-icons/fa";
import iWatch from '../assets/images/watch.png';

function Watch() {
    return (
         <div className='mainWatch'>
              <h1 className='mainTitle'> <FaApple />WATCH</h1>
                <h2 className='subTitle'>SERIES 10</h2>
              <p className="mainText">Thinstant classic.</p>
              <div className='buttons'>
                <button className='learnMore'>Learn more</button>
                <button className='buy'>Buy</button>
              </div>
              <img className='watchImage' src={iWatch} alt="iWatch" />
            </div>
    );
};

export default Watch;