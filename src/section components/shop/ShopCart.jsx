import React, { useState } from 'react'

const ShopCart = ({shopItems,addToCart}) => {
    const [count,setCount]= useState(0)
    const increment =()=>{
        setCount(count + 1)
    }
  return (
    <>
    {shopItems.map((item,index)=>{
        return(
            <div className="box"key={index}>
                <div className="product mTop">
                    <div className="img">
                        <span className="discount">{item.discount}%OFF</span>
                        <img src={item.cover} width="100%" height="100%" alt="" />
                        <div className="product-like">
                            <label>{count}</label>
                            <i className='fa-regular fa-heart' onClick={increment}></i>
                        </div>
                    </div>
                    <div className="product-details">
                        <h3>{item.name}</h3>
                        <div className='rate'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                         </div>
                         <div className="price">
                            <h4>${item.price}.00</h4>
                            <button onClick={()=>addToCart(item)}>
                            <i className='fa fa-plus'></i>
                            </button>
                         </div>
                    </div>
                </div>
            </div>
        )
    })}
    </>
  )
}

export default ShopCart
