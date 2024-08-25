import React from 'react'
import{
  Home,
  Brands,
  Categories,
  Login,
  NotFound,
  Products,
  Register,
  ProductDetails,
  LayOut,
Cart,
Allorders,
} from './components'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import Address from './components/Address/Address.jsx';
import Subcategories from './components/Subcategories/Subcategories.jsx';
import Wishlist from './components/Wishlist/Wishlist.jsx';
import ForgetPass from './components/ForgetPass/ForgetPass.jsx';
import ResetCode from './components/ResetCode/ResetCode.jsx';
import ChangePass from './components/ChangePass/ChangePass.jsx';

// import Subcategories from './components/Subcategories/Subcategories.jsx';

function App() {
  const router=createBrowserRouter([
    {path:'' ,element:<LayOut/>, children:[
      {path: 'home', element : <ProtectedRoute><Home/></ProtectedRoute>
      
      },
      {path:'brands', element :<ProtectedRoute> <Brands/></ProtectedRoute>},
      {path:'allorders', element :<ProtectedRoute><Allorders/></ProtectedRoute>},
      {path:'address/:cartId', element :<ProtectedRoute><Address/></ProtectedRoute>},
      {path:'register', element :<Register/>},
      {path:'categories', element :<ProtectedRoute><Categories/></ProtectedRoute>},
      {path:'subcategories', element :<ProtectedRoute><Subcategories/></ProtectedRoute>},
      {index: true, element :<Login/>},
      {path: '/productDetails/:id' ,element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
      // {path: ':id/subcategories' ,element:<ProtectedRoute><Subcategories/></ProtectedRoute>},
      {path:'products', element :<ProtectedRoute><Products/></ProtectedRoute> },
      {path:'cart', element :<ProtectedRoute><Cart/></ProtectedRoute> },
      {path:'wishlist', element :<ProtectedRoute><Wishlist/></ProtectedRoute> },
      {path:'forgetpass', element :<ForgetPass/> },
      {path:'resetcode', element :<ResetCode/> },
      {path:'changepass', element :<ChangePass/> },

      {path:'*', element :<NotFound/>},
    ]}
   
    
  ])
  return (
  
        <RouterProvider router={router}></RouterProvider>

  
  )
}

export default App