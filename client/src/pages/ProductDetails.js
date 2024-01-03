import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";




const ProductDetails = ({ productId }) => {


  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});



  //initalp details
  useEffect(() => {
    if (params?.id) getProduct();
  }, [params?.id]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/get-product/${params.id}`
      );
      setProduct(data?.product);
      // getSimilarProduct(data?.appointments.service._id, data?.appointments._id);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="mt-10 mx-5">
      <div className="shadow-2xl rounded-3xl grid grid-cols-12  gap-5 ">
        <div className="col-span-5  ">
          <img
            src={product.photo}
            alt={product.name}
            className="rounded-l-3xl "


          />
        </div>
        <div className="col-span-7 ">

          <h6 className=" text-3xl font-medium py-3"> {product.name}</h6>
          <h6 className=" text-lg font-normal py-1"> {product.description}</h6>
          <h6 className="text-indigo-600 text-2xl font-medium py-3">
            Price :
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h6>
          <Link to={'/make-appointment'}><button className="btn">Make Appointment </button></Link>
        </div>
      </div>



    </div>
  );
};

export default ProductDetails;
