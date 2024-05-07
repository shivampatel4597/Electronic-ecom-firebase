import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Products from './Products'

const Home = () => {
  return (
    <div className='w-full h-5 bg-red-500'>
      <Navbar/>
      <Products/>
      <h1>shivm patel</h1>
    </div>
  )
}

export default Home
