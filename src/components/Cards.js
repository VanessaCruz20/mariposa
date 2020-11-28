import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our customizable products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='img/cup.jpg'
              text='Customize your own cup!'
              label='Cups'
              path='/services'
            />
            <CardItem
              src='img/shirt.jpg'
              text='Design your own shirt!'
              label='Shirts'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img/hoodie.jpg'
              text='Design your own hoodies!'
              label='Hoodies'
              path='/services'
            />
            <CardItem
              src='img/sweats.jpeg'
              text='Design your own sweats!'
              label='Sweats'
              path='/products'
            />
            <CardItem
              src='img/sticker.jpg'
              text='Custom stickers available!'
              label='Stickers'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
