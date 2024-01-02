import React, { useState, useEffect } from "react";

import { useUserAuth } from "../../context/UserAuthContext";
const ProfileGoogle = () => {


    const { user, logOut } = useUserAuth()

    return (
        <div >
            <div className="p-10">
                <div className=" ">
                    <div className=" mt-[10px] flex flex-col justify-center items-center">
                        <img src={user?.photoURL} alt={user?.displayName} className="rounded-full w-[150px] h-[150px]" />
                        {/* profile form  */}
                        <div className="w-full max-w-md m-auto my-6 rounded-md ">
                            <div>
                                <div>
                                    <h2 className="mb-3 text-3xl font-semibold text-center">
                                        User Profile
                                    </h2>
                                </div>
                            </div>

                            {/* Form here */}
                            <form className="space-y-8" >
                                <div className="space-y-2">
                                    <div className="space-y-2">
                                        <label className="block text-xl"> Name</label>
                                        <h1 className="text-3xl text-green-500">{user?.displayName} </h1>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-xl">Email </label>
                                        <h1 className="md:text-3xl text-xl text-green-500"> {user?.email}</h1>
                                    </div>




                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileGoogle;
