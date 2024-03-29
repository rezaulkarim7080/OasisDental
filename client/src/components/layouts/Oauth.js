import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import { useUserAuth } from '../../context/UserAuthContext';


const Oauth = () => {

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userImage, setUserImage] = useState("");


    const handleGoogleClick = async (e) => {
        e.preventDefault();
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);

            const res = await axios.post("https://oasis-dental-api.vercel.app/api/google", {

                name: result.user.displayName,
                email: result.user.email,
                password: result.user.password,
                userImage: result.user.photoURL,

            });
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


    return (
        <div className="w-full px-8 py-3 font-semibold rounded-md bg-slate-200 flex justify-center gap-5 hover:bg-slate-100">

            <FcGoogle size={25} />
            <button type="button" onClick={handleGoogleClick}>
                Join with google
            </button>
        </div>
    )
}

export default Oauth