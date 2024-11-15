import React, { useContext } from 'react'
import "./Fooddipsly.css"
import { StoreContext } from '../../context/StoreContex'
import FoodItem from '../FoodItem/FoodItem'
const Fooddisplay = ({category}) => {

    const {food_list}= useContext(StoreContext)
  return (
    <div className='food-display'id='food-dipsly'>
        <h2>top dishes</h2>
        <div className='food-disply-list'>
            {food_list.map((item,index)=>{
              if(category==="All" || category===item.category){
                return <FoodItem 
                key={index} 
                id={index} 
                name={item.name} 
                description={item.description} 
                price={item.price} 
                img={item.image}
                />
              }
            })}
        </div>
    </div>
  )
}

export default Fooddisplay
