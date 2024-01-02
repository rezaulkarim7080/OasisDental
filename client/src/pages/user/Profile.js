import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  //state
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [userImage, setUserImage] = useState("");


  //get user data
  useEffect(() => {
    const { name, address, userImage } = auth.user;
    setName(name);
    setAddress(address);
    setUserImage(userImage);


  }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`https://oasis-dental-api.vercel.app/api/profile`, {
        name,
        address,
        userImage

      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
        navigate('/')
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };



  return (
    <div >
      <div className="p-10">
        <div className=" ">
          <div className=" mt-[10px] flex flex-col justify-center items-center">
            <img src={auth.user.userImage} alt="" className="rounded-full w-[150px] h-[150px]" />
            {/* profile form  */}
            <div className="w-full max-w-md m-auto my-6 rounded-md ">
              <div>
                <div>
                  <h2 className="mb-3 text-3xl font-semibold text-center">
                    Update Profile
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
                      className="w-full px-3 py-2 border bg-slate-50 rounded-md text-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm">Image Link </label>
                    <input
                      type="text"
                      placeholder="enter new image link"
                      name="userImage"
                      value={userImage}
                      id="userImage"
                      onChange={(e) => setUserImage(e.target.value)}
                      className="w-full px-3 py-2 border bg-slate-50 rounded-md text-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm">Address </label>
                    <input
                      type="text"
                      placeholder="enter address"
                      name="address"
                      value={address}
                      id="email"
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3 py-2 border bg-slate-50 rounded-md text-black"
                    />
                  </div>

                  <button
                    type="submit"
                    value="Register"
                    className="w-full px-8 py-3  font-semibold  btn text-white hover:shadow-2xl"
                  >
                    Update
                  </button>

                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
