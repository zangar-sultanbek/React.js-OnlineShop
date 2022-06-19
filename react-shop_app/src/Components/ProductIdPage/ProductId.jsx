import React, { useContext, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import cartContext from '../../Contexts/cartContext';
import Modal from './Modal';
import productidCSS from './ProductId.module.css'

const ProductId = ({id,images,discountPercentage, thumbnail,category, stock, brand, rating, title, description, price}) => {
    const [searchParams] = useSearchParams();
    const {cart, setCart} = useContext(cartContext);
    const isDiscounted = searchParams.has('disc');
    const isItemInCart = cart.some(item => item.id === id);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function addToCart(){
        setCart(prevItems => {
            const newCart = [{thumbnail, id, title, price, isDiscounted, discountPercentage},...prevItems];
            localStorage.setItem('cart_zangar', JSON.stringify(newCart));
            return newCart;
        });
        setIsModalOpen(true);
    }

  return (
    <div className={productidCSS.product_content}>
          <div className={productidCSS.product_header}>
                  <h2>{title}</h2>
                  <span>Category: <b>{category}</b> <br/>Code: {id} </span>
          </div>
          <div className={productidCSS.product_body}>
                {isModalOpen && <Modal title={title} setIsModalOpen={setIsModalOpen}/>}
                
                <div className={productidCSS.product_display}>
                    <img src={thumbnail} alt={`${images[images.length - 1]}`}/>
                </div>
                <div className={productidCSS.product_info}>
                    <div className={productidCSS.product_info_description}>
                        <p>Brand:</p> <p>{brand}</p>
                    </div>
                    <div className={productidCSS.product_info_description}>
                        <p>In-stock:</p> <p>{stock}</p>
                    </div>
                    <div className={productidCSS.product_info_description}>
                        <p>Available:</p> <p>{parseInt(stock) >= 10 ? "Yes" : "No"}</p>
                    </div>
                    <div className={productidCSS.product_info_description}>
                        <p>Rating:</p> <p>{rating} /5</p>
                    </div>
                    <div className={productidCSS.product_info_description}>
                        <p>Weight(kg):</p> <p>~{Math.round(Math.random()*10)}</p>
                    </div>
                    <div className={productidCSS.product_info_description}>
                        <p>Warranty:</p> <p>1 year</p>
                    </div>
                    <div className={productidCSS.product_info_description}>
                        <p>Description: {description}</p>
                    </div>
                    <div className={[productidCSS.product_info_description, productidCSS.product_info_description_actions].join(' ')}>
                        <h3 className={isDiscounted ? productidCSS.product_price_discounted : productidCSS.product_price}>Price: {price} $</h3>
                        {isDiscounted && 
                        <>
                            <span className={productidCSS.product_price_before}>{price + Math.round(((discountPercentage/100) * price))}$</span>
                            <span className={productidCSS.product_price_discount}>-{Math.round(discountPercentage)}%</span>
                        </>}
                        {isItemInCart 
                        ?   <Link to='/cart' className={productidCSS.in_cart_btn}>In cart</Link>
                        :   <button onClick={addToCart} 
                        className={productidCSS.cart_btn}
                        >Add to cart</button>}
                    </div>
                </div>
                
          </div>
    </div>
  )
}

export default ProductId