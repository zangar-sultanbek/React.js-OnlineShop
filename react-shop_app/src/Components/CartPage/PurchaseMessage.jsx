import React from 'react'
import ReactDOM from 'react-dom';
import messageCSS from './PurchaseMessage.module.css';

const PurchaseMessage = ({setIsMessagepPopupOpen}) => {
  setTimeout(() => {
      setIsMessagepPopupOpen(false);
  }, 5000);

  return ReactDOM.createPortal(
        <div className={messageCSS.purchase_message}>
            <h2>Thank you for purchase</h2>
        </div>
        , document.getElementById('root')
  );
}

export default PurchaseMessage