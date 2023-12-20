import React from 'react'
import Model from './Model'

const Home = () => {
  return (
    <div className='h-screen w-screen'>
      <Model 
        title="Model 3"
        leftBtn="Explore Inventory"
        rightBtn="Demo Drive"
        />
      <Model 
        title="Model X"
        leftBtn="Explore Inventory"
        rightBtn="Demo Drive"
        />
      <Model 
        title="Model Y"
        leftBtn="Explore Inventory"
        rightBtn="Demo Drive"
        />
      <Model 
        title="Model S"
        leftBtn="Explore Inventory"
        rightBtn="Demo Drive"
        />
      <Model 
        title="Experience Tesla"
        description="Schedule a Demo drive today"
        rightBtn="Demo Drive"
        />
      <Model 
        title="Powerwall"
        description="Power Everything"
        rightBtn="Learn more"
        />
        
    </div>
  )
}

export default Home