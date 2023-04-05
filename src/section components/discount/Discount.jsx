import React from 'react'
import DCart from './DCart'
import '../newarrivals/style.css'

const Discount = () => {
  return (
    <>
      <section className="Discount background newArrivals">
           <div className="container">
             <div className="heading d_flex">
                <div className="heading-left row f_flex">
                    <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt="" />
                    <h2>Big Discount</h2>
                </div>    
                <div className="heading-right row">
                    <span>View All</span>
                    <i className='fa-solid fa-caret-right'></i>
                </div>         
                
             </div>
             <DCart/>
           </div>
      </section>
    
    </>
  )
}

export default Discount
