import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { object, string } from "yup";
import { toast } from "react-toastify";
function Signup() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    image: "",
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
  const handleImage = (e) => {
    const { name, files } = e.target;
    setUser({
      ...user,
      [name]: files[0],
    });
  };
  const handleForm = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (await validateData()) {
      const formData = new FormData();
      formData.append("userName", user.userName);
      formData.append("email", user.email);
      formData.append("password", user.password);
      formData.append("image", user.image);
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/signup`,
          formData
        );
        setUser({
          userName: "",
          email: "",
          password: "",
          image: "",
        });
        if (data.message == "success") {
          toast.success("Account Created Successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } catch (error) {
        if (error.response.status === 409) {
          toast.error("Please Check Your Data", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } finally {
        setLoader(false);
      }
    }
  };

  const validateData = async () => {
    const RegisterSchema = object({
      userName: string().min(5).max(20).required(),
      email: string().email(),
      password: string().min(8).max(20).required(),
      image: string().required(),
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
        <h2 className="label title">Sign Up </h2>

        <form className="form" onSubmit={handleForm}>
          <label className="label form-item">User Name</label>
          <input
            type="text"
            value={user.userName}
            name="userName"
            onChange={handleChange}
          />

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

          <label className="label form-item ">Image</label>
          <input
            type="file"
            className="image"
            name="image"
            onChange={handleImage}
          />

          <button
            className="button btn btn-outline-success"
            disabled={loader ? "disabled" : null}
            type="submit"
          >
            {loader ? "sign up" : "wait"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
       
