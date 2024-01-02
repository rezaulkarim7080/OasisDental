import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const AllServices = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);





    //getall products
    const getAllProducts = async () => {
        try {
            // const { data } = await axios.get(`http://localhost:5000/api/product-list/${page}`);
            const { data } = await axios.get("http://localhost:5000/api/get-product");
            setProducts(data.products);
        } catch (error) {
            console.log(error);

        }
    };
    //lifecycle method
    useEffect(() => {
        getAllProducts();
    }, []);





    //////////////// 


    return (
        <div>
            <div className="px-5 py-5">
                <div className='flex justify-center items-center py-5'>
                    <h3 className='text-3xl font-medium  text-center'>All Services</h3>
                </div>
                <div className=' mt-10'>
                    <div className="flex flex-wrap justify-around gap-5 py-5 ">
                        {products?.map((p) => (
                            <Link
                                key={p._id}

                                to={`/product/${p._id}`}
                                // to={``}
                                className="border-[1px] border-black rounded-xl hover:shadow-2xl"
                            >
                                <div className="" style={{ width: "22rem", height: "auto" }}>
                                    <img
                                        src={p.photo}
                                        alt={p.name}
                                        className=""

                                    />
                                    <div className="px-2">
                                        <h1 className="text-2xl py-2 font-medium ">{p.name.slice(0, 25)}</h1>
                                        <h1 className="text-lg ">{p.description.slice(0, 55)}...</h1>
                                        <h1 className="text-lg font-bold text-sky-700">${p.price}</h1>

                                    </div>
                                    <div className='flex justify-around py-5'>
                                        <button type="button" class="btn" onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AllServices
