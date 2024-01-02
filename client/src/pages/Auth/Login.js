// Assuming you're using React 17+ and the latest version of React Router
// Make sure to update the imports according to your project structure

import React, { useState, useEffect } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Oauth from "../../components/layouts/Oauth";
import axios from "axios";
import { useUserAuth } from "../../context/UserAuthContext";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [auth, setAuth] = useAuth();
  const { logIn, googleSignIn } = useUserAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://oasis-dental-api.vercel.app/api/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };



  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };


  return (
    <>
      <div className="h-screen">
        <div className="w-full max-w-md m-auto my-6  shadow-lg sm:p-8 border-2 border-green-500 rounded-lg">
          <div>
            <div>
              <h2 className="mb-3 text-3xl font-semibold text-center text-green-500">
                Create an account
              </h2>
            </div>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <div className="space-y-2">
                <label className="block text-sm">Email </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-black bg-slate-50"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm">Password</label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    name="password"
                    placeholder="password"
                    className="w-full px-3 py-2 border bg-slate-50"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {showPassword ? (
                    <AiOutlineEyeInvisible
                      className="absolute top-2 right-2"
                      size={25}
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <MdOutlineVisibility
                      size={25}
                      className="absolute top-2 right-2"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
              </div>
              <div className="py-5">
                <button
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-full  bg-green-600 text-slate-50 hover:text-green-600 hover:shadow-2xl hover:bg-slate-50 "
                >
                  Login
                </button>
              </div>
              <hr className="py-2" />


              {/* JOIN With Google*/}

              <div className="w-full px-8 py-3 font-semibold rounded-full bg-slate-200 flex justify-center gap-5 hover:bg-slate-100">

                <FcGoogle size={25} />
                <button type="button" onClick={handleGoogleSignIn}>
                  Join with google
                </button>
              </div>

              {/* /////////  */}

              <div className="flex justify-between items-center ">

                <div className="text-green-600 text-lg font-semibold focus:underline hover:underline">
                  <Link to={"/forgot-password"} >
                    Forgot Password
                  </Link>
                </div>

                <div className="flex gap-2 items-center ">
                  <p className="text-sm ">Already have an account?</p>
                  <div className=" text-green-600 text-lg font-semibold focus:underline hover:underline">
                    <Link to="/register">Signup</Link>
                  </div>
                </div>

                {/* /////// */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
