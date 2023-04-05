import React from 'react'
import FlashDeals from '../section components/flashDeals/FlashDeals'
import Home from '../section components/main page/Home'
import TopCate from '../section components/top/TopCate'
import NewArrival from '../section components/newarrivals/NewArrival'
import Discount from '../section components/discount/Discount'
import Shop from '../section components/shop/Shop'
import Annoucement from '../section components/annoucement/Annoucement'
import Wrapper from '../section components/wrapper/Wrapper'

const Pages = ({productItems,addToCart,cartItem,shopItems}) => {
  return (
    <>
        <Home cartItem={cartItem} addToCart={addToCart}  />
            <FlashDeals addToCart={addToCart} productItems={productItems}/>
            <TopCate/>
            <NewArrival/>
            <Discount/>
            <Shop shopItems={shopItems} addToCart={addToCart}  />
            <Annoucement/>
            <Wrapper/>
    </>
  )
}

export default Pages
