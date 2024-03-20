import React, { useContext } from 'react'
import {Link,NavLink, useNavigate} from 'react-router-dom'
import './Navbar.css'
import { UserContext } from '../context/User'

function Navbar() {
  const navigate = useNavigate();
  const {userName, setUserName,setUserToken}  = useContext (UserContext)
  const logout=()=>{
    localStorage.removeItem('userToken')
    setUserToken(null);
    setUserName(null);
    navigate('/signin')
  }
  return (
    <>
 
  <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top ">
  <div className="container-fluid bg-light d-flex mb-3 ">
  <Link className="navbar-brand nav-link "  aria-current="page" href="#" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-box2-heart-fill icon" viewBox="0 0 16 16">
  <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1zM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg></Link>
  <Link className="navbar-brand nav-link p-2  "  aria-current="page" href="#" > MY SHOP</Link>
    
   <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <NavLink className="nav-link p-2  " aria-current="page" to="/">Home</NavLink>
        <NavLink className="nav-link p-2 " aria-current="page" to="/products">Products</NavLink>
       {
        userName?
        <>
          <Link className="nav-link  p-2  "  aria-current="page" to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4 icon " viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg></Link>
<NavLink className="nav-link ms-auto p-2  " aria-current="page" to="/signin"><button className='  logoutBtn ' onClick={logout}>Logout</button></NavLink>
        </>
        :
        <>
          <NavLink className="nav-link ms-auto p-2  " aria-current="page" to="/signin">Sign In</NavLink>
        <NavLink className="nav-link  ms-auto p-2" aria-current="page" to="/signup">Sign Up</NavLink>
        </>
        
}
       
      
        
       
        
        
        
      </div>
    </div>
  </div>
</nav>

    
    
    
    </>
  )
}

export default Navbar