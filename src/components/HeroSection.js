import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import logo from './logo.jpg';

function HeroSection() {
  return (
    <div className='hero-container' style={{backgroundImage: "url(./img/logo.jpg)"}}>
      <h1>Quality Customs, Quality Prices</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
