import React from 'react';

const RecepieCategory = ({ category }) => {
    const { image, name } = category;
    return (
        <div className='flex lg:flex-col justify-center items-center lg:pb-8'>
            <div className='category-image'>
                <div className="category-cart">
                    <img className="hover:rotate-12 hover:transition-all hover:duration-500 transform rotate-0 transition-all duration-500"
                        src={image} alt="" />
                </div>
            </div>
            <h2 className='font-medium text-xl'>{name}</h2>
        </div>
    );
};

export default RecepieCategory;