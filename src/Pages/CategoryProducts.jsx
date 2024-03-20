import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseResource from "../hooks/UseResource";
import './CategoryProducts.Module.css'
function CategoryProducts() {
  const { id } = useParams("id");
  const {products,isLoading}=UseResource(id);
  const addCart = async ()=>{
    const token = localStorage.getItem('userToken')
   const {data}= await axios.post(`${import.meta.env.VITE_API_URL}/cart`,{
    productId:id
   },{
    headers:{
        Authorization:`Tariq__${token}`
    }
   })
   console.log(data)
  }
  if (isLoading){
    return<p>loading...</p>
  }
  return (
    <>
      {products.map((product) => (
           <div className="products ">
            <div class="container text-center">
              <div class="row ">
                <div class="col">
                  <div className= "product"  key={product._id}>                  
                    <div className="imageSection">
                    <img className="image" src={product.mainImage.secure_url} />
                    </div>
                     <div className="infoSection">
                    <h2>{product.name}</h2>
                      <p className="description">- Description:{product.description}</p> 
                      <p className="info">- Final Price:{product.finalPrice}</p>
                      <p className="info text-danger">- Discount:{product.discount}</p>
                      <p className="info">- Colors:{product.colors}</p>
                    </div>
                      <button className="cartBtn" onClick={()=>addCart(product._id)}>Add To Cart </button>
                  </div>
                </div>  
              </div>
            </div>           
           </div>       
     
         
))}
    </>
  );
}

export default CategoryProducts;
