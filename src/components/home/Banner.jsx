import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[url(https://www.vasterad.com/themes/chow_html/images/sliderA_01.jpg)] lg:h-[400px] bg-cover bg-center w-full'>
            <div className='bg-gray-500 text-white bg-opacity-40 w-full h-full p-4'>
                <div className='my-container md:flex justify-between items-center h-full'>
                    <div className='space-y-4 lg:w-3/6'>
                        <button className='py-2 px-4 bg-[#8DC63F] text-white rounded-sm'>MAKING</button>
                        <h1 className='text-5xl font-semibold'>Mexican Grilled Corn Recipe</h1>
                        <button className='py-2 px-4 border-[#6b9e23] border-4 bg-black bg-opacity-50 text-white rounded-sm'>VIEW RECIPE</button>
                    </div>
                    <div>
                        <img className='lg:w-[350px] h-full pb-2' src="bannerlogo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;