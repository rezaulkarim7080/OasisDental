/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
    return (
        <div>
            <div className=" h-full py-6 ">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                        {/* image - start */}
                        <Link href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <img src="https://assets.website-files.com/5bc7ea208494fce8cc9df29e/5bc7ea208494fcc2339df2c0_endogonic.jpg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            <div className="pointer-events-none absolute inset-0  bg-black opacity-40">
                            </div>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Teeth Cleanings</span>
                        </Link>
                        {/* image - end */}
                        {/* image - start */}
                        <Link href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <img src="https://i.ibb.co/YyKSF7v/3.jpg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            <div className="pointer-events-none absolute inset-0  bg-black opacity-40">
                            </div>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Cosmetic Fillings</span>
                        </Link>
                        {/* image - end */}
                        {/* image - start */}
                        <Link href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <img src="https://avatars.mds.yandex.net/i?id=9056ee818f8d944249dd2181603a340a43ee2539-10972138-images-thumbs&n=13" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            <div className="pointer-events-none absolute inset-0 bg-black via-transparent to-transparent opacity-40">
                            </div>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Invisalign</span>
                        </Link>
                        {/* image - end */}
                        {/* image - start */}
                        <Link href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <img src="https://www.springvaledental.com.au/blog/wp-content/uploads/2018/11/dental-Sealants-in-kids.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            <div className="pointer-events-none absolute inset-0 bg-black via-transparent to-transparent opacity-40 ">
                            </div>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dental Crowns</span>
                        </Link>
                        {/* image - end */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Gallery
