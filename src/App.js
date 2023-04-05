import './App.css';
import Header from './components/header/Header';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Pages from './pages/Pages';
import Data from './section components/Data';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Sdata from './section components/shop/Sdata';
import Footer from './components/footer/Footer';
function App() {
  const {productItems} = Data;
  const {shopItems} = Sdata
  const [cartItem,setCartItem] = useState([]);

  const addToCart=(product)=>{
      const productExit = cartItem.find(item=>item.id === product.id);
      
      if(productExit){
        setCartItem(cartItem.map((item)=>
        ( item.id === product.id? {...productExit,qty:productExit.qty+1 }:item)))
      }
      else {
        setCartItem([...cartItem, {...product,qty:1}])
      }
      console.log('addToCart')
  }
  const decreaseQty =(product)=>{
    const productExit = cartItem.find(item=>item.id === product.id);
    if(productExit.qty === 1){
      setCartItem(cartItem.filter(item=>item.id !== product.id))
    }
    else{
      setCartItem(cartItem.map((item)=>(item.id === product.id ? {...productExit,qty:productExit.qty-1 }:item)))
    }
  }
   
  return (
    <>
    <Router>
          <Header cartItem={cartItem}/>
      <Switch>
      <Route path="/" exact>
        <Pages shopItems={shopItems}  productItems={productItems} addToCart={addToCart}/>
      </Route>
      <Route path="/cart" exact>
        <Cart decreaseQty={decreaseQty} cartItem={cartItem} addToCart={addToCart}/>
      </Route>

      </Switch>
      <Footer/>
    </Router>
      
    </>
  );
}

export default App;
