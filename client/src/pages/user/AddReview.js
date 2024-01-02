import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { Select } from 'antd';
import { Option } from 'antd/es/mentions';
import axios from "axios";
import { toast } from 'react-toastify';
import { useAuth } from "../../context/auth";

const AddReview = () => {

    const [auth, setAuth] = useAuth();



    const navigate = useNavigate();
    const [service, setService] = useState([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState("");

    const [products, setProducts] = useState([]);


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
            const res = await axios.post("https://oasis-dental-api.vercel.app/api/create-review", {
                service,
                name,
                message,
                rating
            });
            if (res && res.data.success) {
                toast.success("Product Created Successfully");
                navigate("/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }


    }


    return (
        <div className='pb-10 px-5'>
            <div className="max-w-lg mx-auto mt-10  shadow-lg border-2 border-green-500 rounded-lg">
                <div className="text-4xl font-semibold py-4 px-6 text-center  ">
                    Add Review
                </div>
                <form className="py-4 px-6" >
                    <div className="mb-4">
                        <label className="block  font-bold mb-2" >
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white" id="name" type="text" placeholder="Enter your name" value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="block  font-bold mb-2">
                            Rating
                        </label>
                        <Select
                            showSearch
                            bordered={false}
                            placeholder="Select Rating"
                            size="large"

                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            onChange={(value) => {
                                setRating(value);
                            }}
                            value={rating}
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                        </Select>
                    </div>

                    <div className="mb-4">
                        <label className="block  font-bold mb-2" >
                            Service
                        </label>

                        <Select
                            bordered={false}
                            placeholder="Select a Service "
                            size="large"
                            showSearch
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white text"
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
                    <div className="mb-4">
                        <label className="block  font-bold mb-2">
                            Message
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white" id="message" rows={4} placeholder="Enter any additional information" defaultValue={""} value={message}
                            onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <div className="flex items-center justify-center mb-4">
                        <button onClick={handleCreate} className="btn btn-ghost" type="submit">
                            Add Review
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default AddReview
