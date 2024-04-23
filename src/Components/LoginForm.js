import React from "react";
import { useState } from "react";
//import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    navigate("/dashboard");
    alert("Logged In. Enjoy!")
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        <p>
          Email Address<sup>* </sup>
        </p>
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email id"
        />
      </label>

      <label>
        <p>
          Password<sup>* </sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-[38px] cursor-pointer "
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="#">
          <p>Forgot Password ?</p>
        </Link>
      </label>
      <button>Sign In</button>
    </form>
  );
}
