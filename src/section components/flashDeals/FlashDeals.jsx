import React from 'react'
import FlashCard from './FlashCard'

const FlashDeals = ({productItems,addToCart }) => {
  return (
    <>
   <section className="flask background ">
        <div className="container">
          <div className="heading f_flex">
            <i className='fa fa-bolt'></i>
            <h1>Flashdeal</h1>
          </div>
          <FlashCard addToCart={addToCart} productItems={productItems} />
        </div>
   </section>
    </>
  )
}

export default FlashDeals
