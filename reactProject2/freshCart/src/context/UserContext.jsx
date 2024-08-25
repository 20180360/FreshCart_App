import { createContext, useEffect, useState } from "react";

export const UserContext =createContext(0)

export default  function UserContextProvider(props){
const [Token, setToken] = useState(null);
useEffect(() => {
 if(localStorage.getItem('token')!== null){
    setToken(localStorage.getItem('token'))
 }

 
}, [])

    return(
    <UserContext.Provider value={{Token,setToken}}>
{props.children}
    </UserContext.Provider>

) 
}