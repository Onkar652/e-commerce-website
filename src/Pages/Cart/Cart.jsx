import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from "../../context/StoreContex";
import{useNavigate} from "react-router-dom";
const Cart = () => {
  const {cartItems, food_list, removeFromCart,getTotal} = useContext(StoreContext);

  const navigate= useNavigate();
  return (
    <div className='cart'>
      <div className='cart-item'>
        <div className='cart-tiems-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div key={item._id}>
              <div className='cart-items-title cart-items-item'>
                <img src={item.image} alt='' />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)}className='cross'>X</p>
              </div>
              <hr></hr>
              </div>
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
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
            <p>${getTotal()===0?0:2}</p>
            </div>
            <hr />
            <div className='cart-total-detals'>
            <b>Total</b>
            <b>${getTotal()===0?0:getTotal()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Processed to checkout</button>
        </div>
        <div className='cart-promocod'>
          <div>
            <p>If you have a prom code enter here</p>
            <div className='cart-prom-code-inpute'>
              <input type='text' placeholder='prom code' />
              <button>Submite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
