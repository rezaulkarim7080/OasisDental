
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyAppointment = () => {

    const [appointments, setAppointments] = useState([]);
    //getall products
    const getAppointmentController = async () => {
        try {
            const { data } = await axios.get("https://oasis-dental-api.vercel.app/api/appointments");
            setAppointments(data.appointments);
        } catch (error) {
            console.log(error);
            toast.error("Someething Went Wrong");
        }
    };

    //lifecycle method
    useEffect(() => {
        getAppointmentController();
    }, []);


    return (
        <div>
            {/* part 1 AdminMenu */}

            <div className="">

                <div className=" mt-3">
                    <h3 className="text-center text-2xl font-semibold pb-5">All Products List</h3>
                    <div className="flex flex-wrap justify-around gap-4 ">
                        {appointments?.map((p) => (
                            <Link
                                key={p._id}
                                // to={`/product/${p.slug}`}
                                className=""
                            >
                                <div className=" border-[1px] border-black p-5 hover:shadow-xl" style={{ width: "15rem" }}>


                                    <div className="">
                                        <h5 className="font-semibold text-xl">{p.name}</h5>
                                        <h5 className="font-medium text-lg">{p.phone}</h5>
                                        <h5 className="font-medium text-lg">{p.date}</h5>
                                        <h5 className="font-medium text-lg">{p.time}</h5>
                                        <h5 className="font-medium text-lg">{p.service}</h5>
                                        <h5 className="font-medium text-lg">{p.message}</h5>

                                        <button className="btn"> Edit Product</button>
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

export default MyAppointment
