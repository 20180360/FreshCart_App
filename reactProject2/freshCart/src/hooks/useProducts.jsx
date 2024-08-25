import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function useProducts(){
    function getAllProducts(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/products')
    
      }
      const query =useQuery({
        queryKey:[ 'Products'],
        queryFn: getAllProducts,
        // staleTime:8000,
        // gcTime:1000,
    
        // select:(dataFromQuery)=>dataFromQuery.data.data,
      
      })
      return query;
}