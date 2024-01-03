import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { Select } from 'antd';
import { Option } from 'antd/es/mentions';
import axios from "axios";
import { toast } from 'react-toastify';
import { useAuth } from "../../context/auth";
import { useUserAuth } from "../../context/UserAuthContext";

const MakeAppointmentForm = () => {
    //context
    const [auth, setAuth] = useAuth();
    const { user, logOut } = useUserAuth()



    const navigate = useNavigate();
    const [service, setService] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [message, setMessage] = useState("");

    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");

    //getall products
    const getAllProducts = async () => {
        try {

            const { data } = await axios.get("https://oasis-dental-api.vercel.app/api/get-product");
            setProducts(data.products);
        } catch (error) {
            console.log(error);

        }
    };
    //lifecycle method
    useEffect(() => {
        getAllProducts();
    }, []);


    //create product function
    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            if (!name && !email && !phone && !date && !time && !message) {
                setError("Fill All Details");
            } else if (!name) {
                setError("please Enter your Name");
            } else if (!email) {
                setError("please Enter your email");
            } else if (!phone) {
                setError("please Enter your phone");
            } else if (!date) {
                setError("please Enter your date");
            }
            else if (!time) {
                setError("please Enter your time");
            }
            else if (!message) {
                setError("please Enter your message");
            }
            else {
                const res = await axios.post("https://oasis-dental-api.vercel.app/api/create-appointment", {
                    service,
                    name,
                    email,
                    phone,
                    date,
                    time,
                    message,

                });
                if (res && res.data.success) {
                    toast.success("Product Created Successfully");
                    navigate("/");
                } else {
                    toast.error(res.data.message);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error);
        }


    }




    return (
        <div className='pb-10'>

            {auth.user || user ? (<>

                <div className="mx-14 mt-10 border-2 border-green-500 rounded-lg p-3">
                    <div className="mt-10 mx-20 text-center md:text-4xl text-xl font-bold">Book an Appoinment</div>
                    <div className="mt-5 text-center font-medium">Appoinment that You Want to Add , Please Add Here</div>

                    <div className="md:p-8 p-3">
                        <div className="flex gap-4">
                            <input type="text" name="name" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-slate-100 px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 text-black focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm" placeholder="name " value={name}
                                onChange={(e) => setName(e.target.value)} />

                            <input type="text" name="email" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-slate-100 px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 text-black focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm" placeholder="email" value={email}
                                onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        <div className="my-6 flex gap-4 ">
                            <input type="text" name="phone" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-slate-100 px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 text-black focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm" placeholder="phone " value={phone}
                                onChange={(e) => setPhone(e.target.value)} />
                            <input type="date" name="date" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-slate-100 px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 text-black focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm" placeholder="date" value={date}
                                onChange={(e) => setDate(e.target.value)} />

                        </div>
                        <div className="my-6 mb-10 flex gap-4 ">
                            <input type="time" name="time" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-slate-100 px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 text-black focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm" placeholder="time " value={time}
                                onChange={(e) => setTime(e.target.value)} />
                            <Select
                                bordered={false}
                                placeholder="Select a Service "
                                size="large"
                                showSearch
                                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-slate-100 px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 text-black focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
                                onChange={(value) => {
                                    setService(value);
                                }}
                            >
                                {products?.map((p) => (
                                    <Option key={p._id} value={p._id} >

                                        <h1 className="text-xl font-medium">{p.name}</h1>

                                    </Option>
                                ))}
                            </Select>

                        </div>

                        <div >
                            <textarea name="textarea" id="text" cols={30} rows={5} className="mt-1 block w-full rounded-md border border-slate-300 bg-slate-100 px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 text-black focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm" placeholder='Add message' value={message}
                                onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        <p className="py-3 text-xl text-red-600">{error} </p>
                        <div className="flex items-center justify-center mb-4 py-5">
                            <button onClick={handleCreate} className="btn btn-ghost" type="submit">
                                Add booking
                            </button>
                        </div>
                    </div>
                </div>
            </>) : (<>

                <div className="flex justify-center flex-col items-center"> <h1 className="mt-10 mx-20 text-center text-4xl font-bold">Please Login To Book an Appoinment </h1>
                    <Link to={'/login'} ><button className="btn btn-ghost">Goto Login</button> </Link>
                </div>
            </>)
            }


        </div >


    )
}

export default MakeAppointmentForm
