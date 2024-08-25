import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import UserContextProvider from "./context/UserContext.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CartContextProvider from "./context/CartContext.jsx";
// import { ToastContainer } from "react-toast";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import WishlistContextProvider from "./context/WishlistContext.jsx";

var myQuery= new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
 <WishlistContextProvider>
  <CartContextProvider>
  <QueryClientProvider client={myQuery}>
 <UserContextProvider>
 <App />

    <ToastContainer/>
    <ReactQueryDevtools buttonPosition="top-right"/>
  </UserContextProvider>
  </QueryClientProvider>
  </CartContextProvider>
  </WishlistContextProvider> 
  // </React.StrictMode>,
);
