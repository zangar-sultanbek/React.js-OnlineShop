import React, { useContext, useMemo, useState } from 'react';
import {Link} from 'react-router-dom';
import cartContext from '../../Contexts/cartContext';
import cartCSS from './Cart.module.css';
import Item from './Item';
import PurchaseForm from './PurchaseForm';
import PurchaseMessage from './PurchaseMessage';
import Summary from './Summary';

const Cart = () => {
    const {cart, setCart} = useContext(cartContext);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isMessagepPopupOpen, setIsMessagepPopupOpen] = useState(false);
    const totalCost = useMemo(() => 
      {
          return cart.reduce((currentItem, nextItem) => {return currentItem + nextItem.price}, 0)
      }, 
      [cart])


  return (
    <>
    <div className={cartCSS.cart_container}>
        <h3 className={cartCSS.content_header}>{cart.length 
        ? "Current cart:"
        : <>Cart is empty. <Link to="/products">See products</Link></>}
        </h3>
        <div className={cartCSS.cart_items}>
          {cart.map(cartItem => <Item key={cartItem.id} setCart={setCart} {...cartItem}/>)}
        </div>
    </div>
    {Boolean(cart.length) && <Summary totalCost={totalCost} totalCount={cart.length} setIsFormModalOpen={setIsFormModalOpen}/>}
    {isFormModalOpen && <PurchaseForm totalCost={totalCost} setIsFormModalOpen={setIsFormModalOpen} setIsMessagepPopupOpen={setIsMessagepPopupOpen} setCart={setCart}/>}
    {isMessagepPopupOpen && <PurchaseMessage setIsMessagepPopupOpen={setIsMessagepPopupOpen}/>}
    </>
  )
}

export default Cart