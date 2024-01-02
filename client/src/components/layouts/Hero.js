/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
    return (
        <div className='px-5 py-5'>
            <div class="relative h-[550px] w-full rounded-3xl" >
                <img src="https://i.pinimg.com/originals/36/f3/b0/36f3b08e0a0a7bd0c83bd0495bc348f2.jpg" alt="Background Image" class="absolute inset-0 w-full h-full object-cover filter  rounded-3xl" />
                {/* oaverlay */}
                <div class="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>
                {/* /end */}

                <div class="absolute inset-0 flex flex-col items-start justify-center px-5">
                    <h1 class="text-6xl font-bold text-white mb-4">
                        Welcome to Oasis <span className='text-green-500'>Dental Care </span>
                    </h1>
                    <p class="text-lg text-white mb-8">
                        Get the care you need todayBringing You the highest quality of dental care
                    </p>

                    <div className='flex justify-items-start gap-5'>
                        <Link to={'/login'}>
                            <button className='bg-[#ffffff] text-black py-3 px-10 rounded-full  text-center font-medium hover:shadow-2xl hover:text-green-600 hover:border-green-600'> Login</button>
                        </Link>


                        <Link to={'/register'}>
                            <button className='bg-[#ffffff] text-[#000000] py-3 px-10 rounded-full  text-center font-medium hover:shadow-2xl hover:text-green-600 hover:border-green-600'> Sign-up</button>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero