import React, { useState } from 'react'
import "./Home.css"
import Header from '../../Components/Hader/Header'
import Exploremenu from '../../Components/ExploreMenu/Exploremenu'
import Fooddisplay from '../../Components/fooddiplsy/Fooddisplay'
import Appdownload from '../../Components/AppDownload/Appdownload'
const Home = () => {
  const [category ,setcategory] = useState("All");
  console.log(category);
  return (
    <div>
      <Header />
      <Exploremenu category={category} setcategory={setcategory}/>
      <Fooddisplay category={category}/>
      <Appdownload />
    </div>
  )
}

export default Home
