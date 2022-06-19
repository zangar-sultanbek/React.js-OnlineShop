import React from 'react'
import itemCSS from './Item.module.css'

const Item = React.memo(({setCart, thumbnail, id, title, price, isDiscounted, discountPercentage}) => {
  function removeFromCart(){
      setCart(prevCart => {
        const newCart = prevCart.filter(item => item.id !== id);
        localStorage.setItem('cart_zangar', JSON.stringify(newCart));
        return newCart;
      });
  }
  return (
    <div className={itemCSS.cart_item}>
        <div className={itemCSS.cart_item_left}>
          <img src={thumbnail} alt={thumbnail}/>
          <div className={itemCSS.item_info}>
            <h2>{title}</h2>
            {isDiscounted && <span className={itemCSS.item_info_discount}>-{discountPercentage}%</span>}
          </div>
        </div>
        <div className={itemCSS.cart_item_right}>
          <h2 className={itemCSS.item_price}>{price}$</h2>
          <button className={itemCSS.remove_btn}
          onClick={removeFromCart}>Remove</button>
        </div>
        
    </div>
  )
});

export default Item