/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { FaTooth } from "react-icons/fa";


const Footer = () => {
    return <>

        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div className='flex justify-center gap-2 items-start flex-col' >
                    <div className='flex justify-center gap-2 items-center'>
                        <FaTooth size={60} className='text-green-600 ' />
                        <Link className=" text-3xl text-green-600 font-bold"><span className='text-white'>Oasis</span> Dental </Link>
                    </div>
                    <h1>Get the care you need todayBringing You the highest <br /> quality of dental care</h1>
                </div>
                <nav>
                    <header className="footer-title text-green-500">Services</header>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover"> Appoinment</a>
                    <a className="link link-hover">Blogs</a>
                    <a className="link link-hover">Reviews</a>
                </nav>
                <nav>
                    <header className="footer-title  text-green-500">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title text-green-500">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>


    </>



}

export default Footer