import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Checkbox, Radio } from 'antd';


const Services = () => {

    const navigate = useNavigate();


    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);




    //getTOtal COunt
    const getTotal = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/product-count");
            setTotal(data?.total);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (page === 1) return;
        loadMore();

    }, [page]);
    //load more
    const loadMore = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`http://localhost:5000/api/product-list/${page}`);
            setLoading(false);
            setProducts([...products, ...data?.products]);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };


    //getall products
    const getAllProducts = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/product-list/${page}`);
            // const { data } = await axios.get("http://localhost:5000/api/get-product");
            setProducts(data.products);
        } catch (error) {
            console.log(error);

        }
    };
    //lifecycle method
    useEffect(() => {
        getAllProducts();
        getTotal();
    }, []);



    // filter by catagory

    const handleFilter = (value, id) => {
        let all = [...checked];
        if (value) {
            all.push(id);
        } else {
            all = all.filter((c) => c !== id);
        }
        setChecked(all);
    };


    useEffect(() => {
        if (!checked.length && !radio.length) {
            getAllProducts();
        } else {
            filterProduct();
        }
    }, [checked, radio]);

    useEffect(() => {
        if (checked.length || radio.length) filterProduct();
    }, [checked, radio]);

    //get filterd product

    const filterProduct = async () => {
        try {
            const { data } = await axios.post("http://localhost:5000/api/product-filters", {
                checked,
                radio,
            });
            setProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    };


    //////////////// 


    return (
        <div>
            <div className="px-5 py-5">
                <div className='flex justify-center items-center py-5'>
                    <h1 className='text-5xl font-semibold text-center'>Services</h1>
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
                                        <h1 className="text-lg font-bold text-green-600">${p.price}</h1>

                                    </div>
                                    <div className='flex justify-around py-5'>
                                        <button type="button" class="btn" onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>

                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* //////  LoadMore  // */}
                    <div className="text-center  py-5">
                        {
                            products && products.length < total && (<button className='btn ' onClick={(e) => {
                                e.preventDefault();
                                setPage(page + 1);
                                navigate('/all-service')
                            }}> {
                                    loading ? "Loading.." : "LoadMore"
                                }</button>)

                        }
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Services
