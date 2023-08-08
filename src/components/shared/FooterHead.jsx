import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitterSquare, FaGooglePlusG } from "react-icons/fa";

const FooterHead = () => {
    return (
        <div className=' bg-[#333333] text-[#b0b0b0]'>
            <div className='lg:grid lg:grid-cols-4 grid-cols-1 my-container'>
                <div className='lg:col-span-2 p-4 md:border-none border-b'>
                    <h2 className='py-2 text-2xl font-semibold text-white'>About</h2>
                    <div className='lg:flex gap-4 items-center'>
                        <img src="https://dtguru.wpenginepowered.com/wp-content/uploads/2014/05/footer-logo.png" alt="" />
                        <p>Guru comes with powerful theme options, which empowers you to quickly and easily build incredible store. Cras faucibus risus varius. <Link className='text-green-500'>Read More</Link></p>
                    </div>
                </div>
                <div className='p-4 md:border-none border-b'>
                    <h2 className='py-2 text-2xl font-semibold text-white'>Contact Us</h2>
                    <div className='space-y-2'>
                        <p ><FaMapMarkerAlt className='inline'></FaMapMarkerAlt> Address: 103, C Block, West Street, New York, BMC, US</p>
                        <p><FaEnvelope className='inline'></FaEnvelope> Mail: <Link className='hover:text-green-500'>Sojib@yahoo.com</Link></p>
                        <p><FaPhoneAlt className='inline'></FaPhoneAlt> Phone: 020 65241 652145</p>
                    </div>
                </div>
                <div className='p-4 md:border-none border-b'>
                    <h2 className='py-2 text-2xl font-semibold text-white'>Follow Us</h2>
                    <div className='flex items-center gap-2'>
                        <span><Link><FaFacebook className='text-5xl hover:border-sky-500 border p-2 rounded-full'></FaFacebook></Link></span>
                        <span><Link><FaTwitterSquare className='text-5xl hover:border-sky-500 border p-2 rounded-full'></FaTwitterSquare></Link></span>
                        <span><Link><FaGooglePlusG className='text-5xl hover:border-sky-500 border p-2 rounded-full'></FaGooglePlusG></Link></span>
                    </div>
                    <p className='font-normal italic'>We can be supported here!</p>
                </div>
            </div>
        </div>
    );
};

export default FooterHead;