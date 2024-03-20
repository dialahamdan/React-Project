import axios from 'axios';
import React,  { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation} from 'swiper/modules';
import Loader from './Loader';
import {Link} from 'react-router-dom'
function Categories() {
  const[categories,setCategories]=useState([]);
  const[loader,setLoader]=useState(true);
  const [error,setError]=useState('');
 const getCategories =async()=>{
     try{ const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?page=1&limit=10`)
     setCategories(data.categories)
     }catch(error){
      setError("error to load data")
     }
     finally{
      setLoader(false)
     }
        }
  useEffect(()=>{
 getCategories();},[])

 if (loader){
  return(
    <Loader/>
  )
 
 }
  return (
    <>
    
    {error??<p>{error}</p>}
   <Swiper
   className='swiper mt-5'
   spaceBetween={50}
   slidesPerView={3}
   navigation={true}
   pagination={{ clickable: true }}
   scrollbar={{ draggable: true }}
   modules={[Navigation]}
   onSwiper={(swiper) => console.log(swiper)}
   onSlideChange={() => console.log('slide change')}
    >
       {
       categories.map (category =>
        <SwiperSlide>
          <Link to={`/categories/${category._id}`}>
          <div className='categories' key={category.id}>
           <img  src={category.image.secure_url}/>  
           </div></Link>
        </SwiperSlide>
)}   ...
    </Swiper>
    </>
  )
}

export default Categories