import React from 'react'
import Model from './Model'
import CyberTruckImg from '../assets/Cybertruck_74.jpg'
import ModelYImg from '../assets/ModelY_88.jpg'
import ModelXImg from '../assets/ModelX_73.jpg'
import Model3Img from '../assets/Model3_82.jpg'
import ModelSImg from '../assets/ModelS_74.jpg'
import SolarImg from '../assets/Solar.jpg'

const Home = () => {
  return (
    <div className='h-screen w-screen snap-y snap-mandatory overflow-y-scroll'>
      <Model 
        title="Model S"
        leftBtn="Explore Inventory"
        rightBtn="Demo Drive"
        bgImage={ModelSImg}
      />
      <Model 
        title="Model X"
        leftBtn="Explore Inventory"
        rightBtn="Demo Drive"
        bgImage={ModelXImg}
      />
      <Model 
        title="Model 3"
        leftBtn="Explore Inventory"
        rightBtn="Demo Drive"
        bgImage={Model3Img}
      />
      <Model 
        title="Model Y"
        leftBtn="Explore Inventory"
        rightBtn="Demo Drive"
        bgImage={ModelYImg}
      />
      <Model 
        title="CyberTruck"
        leftBtn="Explore Inventory"
        rightBtn="Demo Drive"
        bgImage={CyberTruckImg}
      />
      <Model 
        title="Solar and Powerwall"
        description="Power Everything"
        rightBtn="Learn more"
        bgImage={SolarImg}
      />
        
    </div>
  )
}

export default Home