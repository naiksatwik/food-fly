import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HomeSec from '../components/HomeSec'
import Footer from '../components/Footer'
import Foods from '../components/Foods'

const Home = () => {
  const[count,setAddCart]=useState(0);
  return (
    <div>
        <Navbar count={count}/>
        <HomeSec/>
        <Foods Add={setAddCart} count={count}/>
        <Footer/>
    </div>
  )
}

export default Home