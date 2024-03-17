import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        <NavLink className="nav-link" aria-current="page" to="/products">Products</NavLink>
        <NavLink className="nav-link" aria-current="page" to="/categories">Categories</NavLink>
        <Link className="nav-link"  aria-current="page" to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></Link>
        <NavLink className="nav-link" aria-current="page" to="/signin">Sign In</NavLink>
        <NavLink className="nav-link" aria-current="page" to="/signup">Sign Up</NavLink>
        
        
        
        
      </div>
    </div>
  </div>
</nav>

    
    
    
    </>
  )
}

export default Navbar