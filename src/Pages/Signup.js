import React from 'react'
import signUpImg from "../assets/signup.png"
import Template from '../Components/Template'

export default function Signup({setIsLoggedIn}) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signUpImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}
