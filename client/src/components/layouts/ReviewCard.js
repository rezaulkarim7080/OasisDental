import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReviewCard = () => {
    const [reviews, setReviews] = useState([]);
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const handlePrevReview = () => {
        setCurrentReviewIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : reviews.length - 1));
    };

    const handleNextReview = () => {
        setCurrentReviewIndex((prevIndex) => (prevIndex < reviews.length - 1 ? prevIndex + 1 : 0));
    };

    const getReviewController = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/reviews");
            setReviews(data.reviews);
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong");
        }
    };

    useEffect(() => {
        getReviewController();
    }, []);

    const renderStarRating = (rating) => {
        const starArray = Array.from({ length: rating }, (_, index) => index + 1);
        return (
            <div className="flex items-center justify-center gap-2">
                {starArray.map((star) => (
                    <FaStar key={star} className="text-yellow-500" />
                ))}
            </div>
        );
    };

    return (
        <div className='mt-10'>
            <h1 className='text-5xl font-medium text-center py-10'>Reviews </h1>
            <div className="carousel w-full h-[250px] relative">
                {reviews?.map((p, i) => (
                    <div
                        key={p._id}
                        className={`carousel-item absolute w-full text-center flex justify-center ${i === currentReviewIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            } transition-opacity duration-500 ease-in-out`}
                    >
                        <div className='flex flex-col justify-center border-green-500 border-[1px] w-[85%] rounded-2xl p-5' >
                            <h5 className="font-semibold text-green-500 text-xl text-center py-1"> {p.name}</h5>
                            <h5 className="font-medium text-lg text-center py-1 pb-3">{p.message}</h5>
                            {renderStarRating(p.rating)}

                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <button onClick={handlePrevReview} className="btn btn-circle">❮</button>
                            <button onClick={handleNextReview} className="btn btn-circle">❯</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewCard;
