import React, { useState } from 'react'
import { useEffect } from 'react'
import Style from './NotFound.module.css'
function NotFound() {
    const [counter, setCounter] = useState(0)
    useEffect(() => {}, [])
    
  return (
<>
<h2>NotFound</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus saepe sed dignissimos, molestiae perferendis impedit?</p>
</>
  )
}

export default NotFound