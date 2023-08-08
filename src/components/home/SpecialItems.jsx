import React from 'react';

const SpecialItems = () => {
    return (
        <div className='my-container lg:py-4'>
            <p className='text-sm text-center '>TASTY AND CRUNCHY</p>
            <h2 className='text-2xl font-semibold text-center'>Our Special Recipies</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-between gap-2'>
                <div className='p-2'>
                    <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/04/blog-post1.jpg" alt="" />
                    <div className='border p-2'>
                        <small>APRIL 11, 2016 HEALTHY</small>
                        <h2 className='text-2xl italic'>ITALIAN FAMOUS PASTA WITH MEAT AND CHEESE</h2>
                        <p className='text-gray-600'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis</p>
                        <p className='text-right text-sm'>Comments 25</p>
                    </div>
                </div>
                <div className='p-2'>
                    <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/04/blog-post2.jpg" alt="" />
                    <div className='border p-2'>
                        <small>APRIL 11, 2016 HEALTHY</small>
                        <h2 className='text-2xl italic'>CHOCOLATE CAKE WITH HONEY FLAVOR</h2>
                        <p className='text-gray-600'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis</p>
                        <p className='text-right text-sm'>Comments 20</p>
                    </div>
                </div>
                <div className='p-2'>
                    <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/04/blog-post3.jpg" alt="" />
                    <div className='border p-2'>
                        <small>APRIL 11, 2016 Testy</small>
                        <h2 className='text-2xl italic'>CHICKEN SOUP SPRING VEGGIES AND PASTA</h2>
                        <p className='text-gray-600'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis</p>
                        <p className='text-right text-sm'>Comments 2</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialItems;