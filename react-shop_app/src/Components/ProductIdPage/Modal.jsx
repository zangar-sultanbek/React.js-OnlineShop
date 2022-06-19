import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import cartContext from '../../Contexts/cartContext';
import modalCSS from './Modal.module.css';
import {Link} from 'react-router-dom';
//Icons from react-icons library
import {FcCheckmark} from 'react-icons/fc'
import {AiOutlineClose} from 'react-icons/ai'

const Modal = ({title, setIsModalOpen}) => {
    const {cart} = useContext(cartContext);
    
  return ReactDOM.createPortal(
    <div className={modalCSS.modal_container}>
        <div className={modalCSS.modal_content}>
            <div className={modalCSS.modal_info}>
                <button className={modalCSS.close_btn}
                onClick={() => setIsModalOpen(false)}><AiOutlineClose/></button>
                <div className={modalCSS.modal_title}>
                    <h2>
                        <FcCheckmark/>
                        Added to the cart: {title}
                    </h2>
                    <span>Items in cart: {cart.length}</span>
                </div>
                <div className={modalCSS.modal_btns}>
                    <Link to='/cart' className={modalCSS.cart_btn}>Go to cart</Link>
                    <Link to='/products' className={modalCSS.continue_btn}>Continue shopping</Link>
                </div>
            </div>
        </div>
    </div>
    , document.getElementById('root')
  );
}

export default Modal