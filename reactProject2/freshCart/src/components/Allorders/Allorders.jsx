import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AllOrders() {
  const [orders, setOrders] = useState([])
async function getAllOrders(){
  return await axios.get('https://ecommerce.routemisr.com/api/v1/orders/')
  .then(({data})=>{
    setOrders(data)

  })
  .catch(err=>err)
}

useEffect(() => {
  getAllOrders()
}, [])


  return (
    <div className="py-7">
    <div className="grid grid-cols-3 gap-4">
      {orders.data?.map((order) => (
        <div
          key={order._id}
          className="border-slate-100 border-2 rounded category category:hover"
          onClick={() => handleCategoryClick(order)}
        >
          <img src={order.image} className="w-full h-[300px] object-cover" />
          <p className="text-center text-green-600 p-6 text-2xl font-bold">{order.name}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default AllOrders