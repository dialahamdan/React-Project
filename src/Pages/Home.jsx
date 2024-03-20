import React, { useContext } from "react";
import Categories from "./Categories";
import { UserContext } from "../context/User";
function Home() {
  const {userName}  = useContext (UserContext)
  return (
    <>
    <img src="cover.jpg" alt="hero section photo" className="hero"/>
    <h4 className="fst-italic text-secondary">Welcome {userName} </h4>
    <Categories/>
    </>
  )
}

export default Home