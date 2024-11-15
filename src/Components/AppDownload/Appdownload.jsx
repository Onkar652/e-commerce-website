import React from 'react'
import "./Appdownload.css"
import assets from '../../assets/assets'
const Appdownload = () => {
  return (
    <div className='Appdownload' id='Appdownload'>
      <p>for bettere expreince download <br /> Alex Zoye</p>
      <div className='AppDownload-platfroms'>
        <img src={assets.play_store} alt='' />
        <img src={assets.app_store} alt='' />
      </div>
    </div>
  )
}

export default Appdownload
