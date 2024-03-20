import React, { useContext, useState } from "react";
import "./signup.css";
import axios from "axios";
import { object, string } from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/User";
function Signin() {
  const {setUserToken} = useContext (UserContext)
  const navigate =useNavigate();
  const [user, setUser] = useState({
    
    email: "",
    password: "",
    
  });
  const [errors, setErrors] = useState([]);
  const [loader, setLoader] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
 
  const handleForm = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (await validateData()) {
      const formData = new FormData();
     
      formData.append("email", user.email);
      formData.append("password", user.password);
      
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/signin`,
          {
            email:user.email,
            password:user.password
          }
        );
        setUser({
          
          email: "",
          password: "",
          
        });
       
        if (data.message == "success") {
          toast.success("Log In Successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        
          localStorage.setItem('userToken',data.token)
          setUserToken(data.token);
          navigate('/')
         
          
        }
      } catch (error) {
        
          toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        
      } finally {
        setLoader(false);
      }
    }
  };

  const validateData = async () => {
    const RegisterSchema = object({
     
      email: string().email(),
      password: string().min(8).max(20).required(),
     
    });
    try {
      await RegisterSchema.validate(user, { abortEarly: false });
      return true;
    } catch (error) {
      setErrors(error.errors);
      setLoader(false);
      return false;
    }
  };

  return (
    <>
      {errors.length > 0 ? errors.map((error) => <p>{error}</p>) : ""}

      <div className="register">
        <h2 className="label title">Sign In </h2>

        <form className="form" onSubmit={handleForm}>
         

          <label className="label form-item">Email</label>
          <input
            type="email"
            value={user.email}
            name="email"
            onChange={handleChange}
          />

          <label className="label form-item">Password</label>
          <input
            type="password"
            value={user.password}
            name="password"
            onChange={handleChange}
          />

       

          <button
            className=" signBtn"
            disabled={loader?"disabled":null}
            type="submit"
          >
            {!loader ? "sign in" : "wait..."}
          </button>
        </form>
      </div>
    </>
  );
}

export default Signin;

