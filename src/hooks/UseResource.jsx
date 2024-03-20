import React , { useEffect, useState }  from 'react'
import axios from "axios";
function UseResource(id) {
   
    const [products, setProducts] = useState([]);
   const [isLoading,setIsLoading]=useState(true);
    const getProducts = async () => {
      try{  const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/products/category/${id}`
       
      );
      setProducts(data.products);
    }catch(error){

    }finally{
        setIsLoading(false)
    }
       
      };
      useEffect(() => {
        getProducts();
      },[]);
  return {products}
}

export default UseResource