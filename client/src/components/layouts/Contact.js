import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <h1 className='text-5xl font-medium text-center py-5'>Contact </h1>
            <div className="text-gray-600 body-font relative">
                <div className="px-5 py-10 mx-auto flex justify-center">
                    <div className="w-[100%] bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-center relative">


                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14759.86041380334!2d91.8278813381448!3d22.354946469535452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd89e1a92c4b9%3A0xa6819d9009884ddb!2z4Kaa4KaVIOCmrOCmvuCmnOCmvuCmsCwg4Kaa4Kaf4KeN4Kaf4KaX4KeN4Kaw4Ka-4Kau!5e0!3m2!1sbn!2sbd!4v1704194102014!5m2!1sbn!2sbd" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }} />

                        <div className="bg-white relative flex flex-wrap py-6 px-5 rounded shadow-md">
                            <div className=" px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Chittagong,Bangladeh</p>
                            </div>
                            <div className=" px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <Link className="text-red-500 leading-relaxed">rkrezaulkarim88@gmail.com</Link>
                                {/* <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">123-456-7890</p> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Contact
