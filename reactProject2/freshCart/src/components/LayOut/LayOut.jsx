import React, { useState } from 'react'
import { useEffect } from 'react'
import Style from './LayOut.module.css'
import{Navbar,
  
} from '../'
import { Outlet } from 'react-router-dom'

function LayOut() {
    const [counter, setCounter] = useState(0)
    useEffect(() => {}, [])
    
  return (
<>
<Navbar/>
<div className="container">
  <Outlet></Outlet>
</div>

</>
  )
}

export default LayOut