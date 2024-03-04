import axios from 'axios';
import React,  { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation} from 'swiper/modules';
function Home() {
  const[categories,setCategories]=useState([]);
 const getCategories =async()=>{
      const {data}= await axios.get(`https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`)
      setCategories(data.categories)
      console.log(data.categories)
        }
  useEffect(()=>{
 getCategories();},[])
  return (
    <>
    
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
           <div className='categories' key={category.id}>
           <img  src={category.image.secure_url}/>   
      </div>
        </SwiperSlide>
)}   ...
    </Swiper>
    </>
  )
}

export default Home