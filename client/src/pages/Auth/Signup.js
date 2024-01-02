import React, { useState, useEffect } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Oauth from "../../components/layouts/Oauth";
import { toast } from "react-toastify";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useUserAuth } from "../../context/UserAuthContext";


const Signup = () => {

  const { logIn, googleSignIn, facebookSignIn, GithubSignIn } = useUserAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userImage, setUserImage] = useState("");



  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
        userImage,

      });
      // await logIn(email, password);// firebase
      if (res && res.data.success) {
        toast.success("registation success full");
        navigate("/login");
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

          {/* Form here */}
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <div className="space-y-2">
                <label className="block text-sm"> Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  value={name}
                  required
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md bg-slate-50"
                />
              </div>
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
              <div className="space-y-2 ">
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
              <div className="space-y-2 ">
                <label className="block text-sm"> Image Url</label>
                <input
                  type="text"
                  name="userImage"
                  placeholder="Image Url"
                  id="userImage"
                  value={userImage}
                  onChange={(e) => setUserImage(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-black bg-slate-50"
                />
              </div>
              <div className=" py-5">

                <button
                  type="submit"
                  value="Register"
                  className="w-full px-8 py-3 font-semibold rounded-full  bg-green-600 text-slate-50 hover:text-green-600 hover:shadow-2xl hover:bg-slate-50 "
                >

                  Sign up
                </button>
              </div>
              <hr className="py-2 pt-5" />



              {/* JOIN With Google*/}

              <div className="w-full px-8 py-3 font-semibold rounded-full bg-slate-200 flex justify-center gap-5 hover:bg-slate-100">

                <FcGoogle size={25} />
                <button type="button" onClick={handleGoogleSignIn}>
                  Join with google
                </button>
              </div>

              {/* /////////  */}
              <div className="flex justify-center items-center py-2">
                <p className="text-sm text-center">Already have an account?</p>
                <div className=" text-green-600 text-lg font-semibold focus:underline hover:underline">
                  <Link to="/login">Login</Link>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
