import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/StoreContex'
const PlaceOrder = () => {

  const {getTotal}= useContext(StoreContext);
  return (
    <form className="place-order">
      <div className='Place-order-left'>
        <p className='title'>Deleivery infromation</p>
        <div className='Multi-fileds'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
        </div>
        <input type='email' placeholder='Email Address' />
        <input type='text' placeholder='Street' />
        <div className='Multi-fileds'>
          <input type='text' placeholder='city' />
          <input type='text' placeholder='State' />
        </div>
        <div className='Multi-fileds'>
          <input type='text' placeholder='pincode' />
          <input type='text' placeholder='country' />
        </div>
          <input type='text' placeholder='Phoen' />
      </div>
      <div className='place-order-right'>
      <div className='cart-totla'>
          <h2>Cart totla</h2>
          <div>
            <div className='cart-total-detals'>
              <p>Subtotal</p>
              <p>${getTotal()}</p>
            </div>
            <hr />
            <div className='cart-total-detals'>
            <p>Deleivery charages</p>
            <p>$${getTotal()===0?0:2}</p>
            </div>
            <hr />
            <div className='cart-total-detals'>
            <p>Total</p>
            <b>${getTotal()===0?0:getTotal()+2}</b>
            </div>
          </div>
          <button>Processed to payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
