import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Logo from '../assets/logo.png'
const Login = () => {
  let navigate = useNavigate()
  const auth = getAuth();
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [show, setShow] = useState(false)
  let handleEmail = (e)=>{
    setEmail(e.target.value)
}
let handlePassword = (e)=>{
  setPassword(e.target.value)
}
let handleSubmit = (e)=>{
  e.preventDefault()
  
  const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const user = userCredential.user;
    navigate("/")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
let showPassword = ()=>{
  setShow(!show)
}
  return (
    <div>
      <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={Logo}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-[#262626]">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-[#262626]">
                Email address
              </label>
              <div className="mt-2">
                <input onChange={handleEmail}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-[#262626] outline-1 -outline-offset-1 outline-[#767676] placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#262626] sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-[#262626]">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-[#262626] hover:text-[#767676]">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="relative mt-2">
                <input onChange={handlePassword}
                  id="password"
                  name="password"
                  type={show ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  className=" block w-full rounded-md bg-white px-3 py-1.5 text-base text-[#262626] outline-1 -outline-offset-1 outline-[#767676] placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#262626] sm:text-sm/6"
                />
                <div className="absolute right-2 top-[50%] transform -translate-y-[50%]" onClick={showPassword}>
                  {show ? <FaRegEyeSlash /> :<FaRegEye />}
                </div>
              </div>
            </div>
            <div>
              <button onClick={handleSubmit}
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#262626] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#767676] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#262626]"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold text-[#262626] hover:text-[#767676]">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
