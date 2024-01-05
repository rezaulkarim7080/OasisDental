import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { toast } from 'react-toastify';
import { useUserAuth } from '../../context/UserAuthContext';
import { FaTooth } from "react-icons/fa";


const Header = () => {




    const navigate = useNavigate();


    const [auth, setAuth] = useAuth();
    const { user, logOut } = useUserAuth()



    const handleLogout = async () => {
        if (auth.user && auth.user.provider === 'google') {

            try {
                await logOut();
            } catch (err) {
                console.log(err.message);
            }
        } else {

            setAuth({
                ...auth,
                user: null,
                token: "",
            });

            await logOut();

            localStorage.removeItem("auth");
        }

        toast.success("Logout Successfully");
    };


    const handleProfileClick = () => {
        const destination = auth.user ? '/user/profile' : user ? '/user/profileGoogle' : '/login';
        navigate(destination);
    };



    return (

        <div>
            <div className="navbar bg-base-100 px-5">
                <div className="navbar-start gap-2 flex flex-row items-center">
                    <div className="dropdown m-2">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-xl font-medium'><Link to={'/'}>Home</Link>
                            </li>


                            <li className='text-xl font-medium'><Link to={'/blog'}>Blog</Link>
                            </li>


                            {(auth.user || user) && (
                                <>
                                    <li className='text-xl font-medium'><Link to={'/add-services'}>Add Service</Link></li>
                                    <li className='text-xl font-medium'><Link to={'/add-review'}>Add Reviews</Link></li>
                                </>
                            )}
                        </ul>
                    </div>
                    <div className='flex justify-center gap-2 items-center'>
                        <FaTooth size={60} className='text-green-600 ' />
                        <Link className=" text-3xl text-green-600 font-bold"><span className='text-white'>Oasis</span> Dental </Link>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-xl font-medium'><Link to={'/'}>Home</Link>
                        </li>


                        <li className='text-xl font-medium'><Link to={'/blog'}>Blog</Link>
                        </li>

                        {(auth.user || user) && (
                            <>
                                <li className='text-xl font-medium'><Link to={'/add-services'}>Add Service</Link></li>
                                <li className='text-xl font-medium'><Link to={'/add-review'}>Add Reviews</Link></li>
                            </>
                        )}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">

                    {auth.user || user ? (<>
                        <h1 className='md:text-lg md:font-medium md:px-2 '>{auth.user ? auth.user.name : user.displayName}</h1>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className=" btn-ghost btn-circle avatar">
                                <div className="w-15 rounded-full outline  outline-green-500 ">
                                    <img src={auth.user?.userImage || user?.photoURL} alt={auth.user?.name || user?.displayName} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <button onClick={handleProfileClick} className="justify-between text-xl">
                                        Profile
                                    </button>
                                </li>

                                <li>
                                    <Link to='/' onClick={handleLogout} className='bg-indigo-600 text-xl px-2 py-2 hover:bg-white hover:text-indigo-600'>Logout</Link></li>
                            </ul>
                        </div>

                    </>) : (<>
                        <Link to={'/login'} className="btn btn-ghost text-xl md:block hidden">Login</Link>
                        <Link to={'/register'} className="btn btn-ghost text-xl md:block hidden">Signup</Link>
                    </>)

                    }
                </div>
            </div>
        </div >
    )
}

export default Header
