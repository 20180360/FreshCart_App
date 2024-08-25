import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import Style from './Home.module.css'
import RecentProducts from '../RecentProducts/RecentProducts'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
import MainSlider from '../MainSlider/MainSlider'
function Home() {
    useEffect(() => {}, [])

    
  return (
<>
<MainSlider/>
<CategoriesSlider/>
<RecentProducts/>

</>
  )
}

export default Home