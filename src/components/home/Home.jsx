import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Chefs from './Chefs';
import RecepieCategory from './RecepieCategory';
import Todays from './Todays';
import SpecialItems from './SpecialItems';
import Reviews from './Reviews';

const Home = () => {
    // load chefs data for six card
    const [chef, setChef] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://chef-server-ashaansojib.vercel.app/allchef')
            .then(res => res.json())
            .then(data => {
                setChef(data)
                setLoading(false)
            })
    }, []);
    useEffect(() => {
        fetch('https://chef-server-ashaansojib.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setLoading(false)
            })
    }, []);

    return (
        <div className=''>
            <Banner></Banner>
            {/* chef section card */}
            <div className='my-container my-24 p-10 grid lg:grid-cols-3 md:grid-cols-2 md:gap-8 justify-around'>
                {loading ? (
                    <div className='lg:pl-[400px]'><progress className="progress w-56"></progress></div>
                ) : (
                    chef.map(chefcard => (
                        <Chefs key={chefcard._id} chef={chefcard} />
                    ))
                )}
            </div>
            {/* category section */}
            <div>
                <div className='text-center pb-16'>
                    <p className='text-[#8DC63F]'>Choose a Category</p>
                    <h2 className='text-6xl font-bold'>Recipe Categories</h2>
                </div>
                <div className='my-container grid lg:grid-cols-5 md:grid-cols-2 lg:gap-10'>
                    {
                        loading ? (
                            <div className='lg:pl-[400px]'><progress className="progress w-56"></progress></div>
                        ) : (
                                categories.map(category => <RecepieCategory
                                    key={category._id}
                                    category={category}
                                ></RecepieCategory>)
                        )
                    }
                </div>
            </div>
            {/* Special items sections */}
            <SpecialItems />
            {/* today's pick */}
            <Todays></Todays>
            {/* Reviews sections */}
            <Reviews />
        </div>
    );
};

export default Home;