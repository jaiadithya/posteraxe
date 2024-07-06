import React from 'react'
import Hero from './hero'
import Customer from './customer'
import Featured from './featured'
import Desc from './desc'
import Browse from './browse'
import Recent from './recent'
import Banner from './banner'
import Designer from './designer'

const Home = () => {
  return (
    <div >
      <Hero/>
      <Customer/>
      <Featured/>
      <Desc/>
      <Browse/>
      <Recent/>
      <Banner/>
      <Designer/>
    </div>
  )
}

export default Home