import React from 'react'
import "./Exploremenu.css"
import {menu_list} from "../../assets/assets"
const Exploremenu = ({category, setcategory}) => {

  

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Menu List</h1>
      <p className='explore-menu-text'>dkljflks dfjlksjf dfkwoiejf kscmalsdfwo fkdjwiejf dlcmladjfoweijf dsl;c xlsamfjowiejf dcma</p>
      <div className='explore-menu-list'>
           {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setcategory(prevalue=>prevalue===item.menu_name?"All":item.menu_name)} key={index} id={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt='' />
                    <p>{item.menu_name}</p>
                </div>
            )
           })}
      </div>
      <hr />
    </div>
  )
}

export default Exploremenu
