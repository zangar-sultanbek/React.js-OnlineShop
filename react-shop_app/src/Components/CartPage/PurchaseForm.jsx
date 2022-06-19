import React, { useState } from 'react'
import purchaseFormCSS from './PurchaseForm.module.css'
import {AiOutlineClose} from 'react-icons/ai'

const PurchaseForm = ({setIsFormModalOpen, setIsMessagepPopupOpen,setCart, totalCost}) => {
    const [formData, setFormData] = useState(
        {
            inp_phone: '',
            inp_name: '',
            inp_address: '',
            card_number: '',
            card_owner: '',
            card_expiry: '',
            card_cvv: ''
        });
    const [isFormChecking, setIsFormChecking] = useState(false);

    function handleFormInput(e){
        const {name, value} = e.target;
        setFormData(prevInp => {
            switch(name){
                case 'inp_phone':
                case 'card_cvv':
                    return  {...prevInp, [name] : `${value.replace(/\D/g, '')}`}
                case 'inp_name':
                case 'card_owner':
                    return  {...prevInp, [name] : value.replace(/[^a-zA-Z ]/g,'')};
                default:
                    return  {...prevInp, [name] : value};
            }  
        })
    }
    function handleFormSubmit(e){
        e.preventDefault();
        setIsFormChecking(true);
        setTimeout(() => {
            setIsMessagepPopupOpen(true);
            setCart([]);
            setIsFormModalOpen(false);
            setIsFormChecking(false);
        }, 2000);
    }

  return (
    <div className={purchaseFormCSS.form_modal}>
        <div className={purchaseFormCSS.form_container}>
            <div className={purchaseFormCSS.form_content}>
                <button 
                className={purchaseFormCSS.form_close_btn}
                onClick={() => setIsFormModalOpen(false)}><AiOutlineClose/></button>
                <form 
                onSubmit={handleFormSubmit}
                className={purchaseFormCSS.form_data}>
                    <label htmlFor='inp_phone'>Phone number *</label>
                    <input 
                        id='inp_phone'
                        name='inp_phone'
                        required
                        maxLength={15}
                        minLength={8}
                        value={formData.inp_phone}
                        onChange={handleFormInput}

                        type='tel' 
                        />
                    <label htmlFor='inp_name'>Full name *</label>
                    <input 
                        id='inp_name'
                        name='inp_name'
                        value={formData.inp_name}
                        onChange={handleFormInput}
                        required
                        type='text'/>
                    <label htmlFor='inp_address'>Address *</label>
                    <input 
                        id='inp_address'
                        name='inp_address'
                        value={formData.inp_address}
                        onChange={handleFormInput}
                        required
                        type='text'/>
                    <label htmlFor='card_number'>Card number *</label>
                    <input 
                        id='card_number'
                        name='card_number'
                        value={formData.card_number}
                        autoComplete="off"
                        onChange={handleFormInput}
                        required
                        type='number'/>
                    <label htmlFor='card_owner'>Card owner *</label>
                    <input 
                        id='card_owner'
                        name='card_owner'
                        value={formData.card_owner}
                        autoComplete="off"
                        onChange={handleFormInput}
                        required
                        type='text'/>

                    <div className={purchaseFormCSS.card_data}>
                        <div>
                            <label htmlFor='card_expiry'>Expiry date *</label>
                            <input
                                id='card_expiry' 
                                name='card_expiry'
                                value={formData.card_expiry}
                                onChange={handleFormInput}
                                required
                                type='month'/>
                        </div>
                        <div>
                            <label htmlFor='card_cvv'>CVV *</label>
                            <input 
                                id='card_cvv'
                                name='card_cvv'
                                value={formData.card_cvv}
                                maxLength={3}
                                minLength={3}
                                required
                                onChange={handleFormInput}
                                type='password'/>
                        </div>
                    </div>
                    <span>Tax: <b>10$</b></span>
                    <span>To pay: <b>{totalCost+10}.00$</b></span>
                    <button 
                    disabled={isFormChecking}
                    className={purchaseFormCSS.form_submit_btn}>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default PurchaseForm