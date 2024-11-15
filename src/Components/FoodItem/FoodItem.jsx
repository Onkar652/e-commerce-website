import React, { useContext} from 'react'
import "./FoodItem.css"
import assets from '../../assets/assets'
import { StoreContext } from '../../context/StoreContex';
const FoodItem = ({id,name,price,description,img}) => {
  const{
    cartItems={},
    addtoCart,
    removeFromCart} = useContext(StoreContext);
    return (
    <div className='FoodItem'>
        <div className='FoodItem-contianer'>
            <img src={img} className='FoodItem-image' alt='' />
            {!cartItems[id]
              ?<img className="add" onClick={()=>addtoCart(id)}src={assets.add_icon_white} alt=''/>
              :<div className='FoodITem-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt='' />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addtoCart(id)} src={assets.add_icon_green} alt='' />
              </div>
            }
        </div>
        <div className='FoodItem-info'>
            <div className='FoodItem-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt='' />
            </div>
            <p className='FoodItem-description'>{description}</p>
            <p className='FoodItem-price'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem
