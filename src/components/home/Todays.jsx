import React from 'react';
import { Link } from 'react-router-dom';

const Todays = () => {
    return (
        <div className='bg-fixed bg-cover object-cover bg-[url(https://fooddy.ancorathemes.com/wp-content/uploads/2017/01/bg_top.jpg?id=846)]'>
            <div className='md:h-[550px] text-white py-20 today text-center space-y-4 px-4'>
                <h2 className='text-5xl'>TODAY’S HOT DEAL</h2>
                <p className='text-gray-400'>Offer of the Day</p>
                <div className='md:flex justify-center items-center lg:gap-16'>
                    <div className='count'>
                        <div className='w-[130px] h-[130px] text-5xl bg-white text-gray-800 rounded-full pt-10'>
                            <h2>80</h2>
                        </div>
                        <h4>Days</h4>
                    </div>
                    <div className='count'>
                        <div className='w-[130px] h-[130px] text-5xl bg-white text-gray-800 rounded-full pt-10'>
                            <h2>03</h2>
                        </div>
                        <h4>Hours</h4>
                    </div>
                    <div className='count'>
                        <div className='w-[130px] h-[130px] text-5xl bg-white text-gray-800 rounded-full pt-10'>
                            <h2>59</h2>
                        </div>
                        <h4>Minutes</h4>
                    </div>
                    <div className='count'>
                        <div className='w-[130px] h-[130px] text-5xl bg-white text-gray-800 rounded-full pt-10'>
                            <h2>60</h2>
                        </div>
                        <h4>Second</h4>
                    </div>
                </div>
                <h3 className='text-2xl'>Vegetarian Pasta <span className='line-through'>$22.00</span> <span className='text-orange-400'>$19.00</span></h3>
                <p className='text-gray-300'>Restaurant “Fusion”</p>
                <div className='space-x-4'>
                    <Link className='hover:text-orange-400' to="/">View Now</Link> 
                    <button className='btn bg-[#8dc63f]'>Offer Deal</button>
                </div>
            </div>
        </div>
    );
};

export default Todays;