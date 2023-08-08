import React, { useState } from 'react';
import { FaClock, FaCut, FaCheckSquare } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ChefRecipe = () => {
    const MySwal = withReactContent(Swal);

    const [favorite1, setFavorite1] = useState(true);
    const [favorite2, setFavorite2] = useState(true);
    const [favorite3, setFavorite3] = useState(true);

    const buttonOne = () => {
        MySwal.fire({
            title: <strong>Like It ?</strong>,
            html: <i>Recipe Add To Favourite</i>,
            icon: 'success'
        })
        setFavorite1(false)
    }
    const buttonTwo = () => {
        setFavorite2(false)
        MySwal.fire({
            title: <strong>Like It ?</strong>,
            html: <i>Recipe Add To Favourite</i>,
            icon: 'success'
        })
    }
    const buttonThree = () => {
        setFavorite3(false)
        MySwal.fire({
            title: <strong>Like It ?</strong>,
            html: <i>Recipe Add To Favourite</i>,
            icon: 'success'
        })
    }
    const details = useLoaderData()
    const { name, chef_image, experience, recipes, likes, ingredients, bio, cooking, recipe1, recipe2, recipe3, image1, image2, image3 } = details;
    // ingredient data map
    const ingredient = ingredients.map((ingredient, index) => <li className='flex gap-2 items-center' key={index}><FaCheckSquare className='text-green-500'></FaCheckSquare>{ingredient}</li>);
    // coocked method
    const cookingMethod = cooking.map((cook, index) => <li key={index}>{cook}</li>)
    return (
        <div>
            {/* details banner */}
            <div className='detail-container'>
                <div className='detail-bg'>
                    <div className='my-container lg:flex justify-between items-center h-full'>
                        <div className='space-y-4 lg:w-3/6 p-4'>
                            <h1 className='text-5xl font-semibold'><span className='text-[#ff2516]'>Hello I'm</span> {name}</h1>
                            <h1 className='text-2xl font-semibold'>I Am Making Of Awesome Recipes</h1>
                            <p>{bio}</p>
                            <div className='lg:flex justify-around items-center'>
                                <p className='border border-white px-2'>{experience} Experiences</p>
                                <p className='border border-white px-2'>{recipes} + Recepies</p>
                                <p className='border border-white px-2'>{likes} + Likes</p>
                            </div>
                            <button className='py-2 px-4 border-[#6b9e23] border-4 bg-black bg-opacity-50 text-white rounded-sm'>VIEW RECIPE</button>
                        </div>
                        <div>
                            <img className='lg:w-[450px] lg:h-[390px] py-2 px-4 bg-slate-500 bg-transparent' src={chef_image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* details Ingredients */}
            <div className='lg:w-[850px] mx-auto p-4 my-4 bg-slate-100 rounded-md'>
                <div className='flex justify-between items-center'>
                    <div className='md:flex justify-between items-center gap-4'>
                        <div>
                            <FaCut className='text-4xl text-gray-400'></FaCut>
                        </div>
                        <div>
                            <p>YIELDS</p>
                            <p>12 Servings</p>
                        </div>
                    </div>
                    <div className='lg:flex justify-between items-center gap-4'>
                        <div className='flex justify-between items-center gap-4'>
                            <div>
                                <FaClock className='text-4xl text-gray-400'></FaClock>
                            </div>
                            <div>
                                <p>Prep Time</p>
                                <p>30 mins</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-4'>
                            <div>
                                <FaClock className='text-4xl text-gray-400'></FaClock>
                            </div>
                            <div>
                                <p>Coock Time</p>
                                <p>50 mins</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-4'>
                            <div>
                                <FaClock className='text-4xl text-gray-400'></FaClock>
                            </div>
                            <div>
                                <p>Total Time</p>
                                <p>1 Hours 20 mins</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-container lg:grid grid-cols-3 justify-around p-4'>
                <div>
                    <h2 className='card-title'>Main Ingredients</h2>
                    <ul className='space-y-2 py-4'>
                        {ingredient}
                    </ul>
                </div>
                <div className='lg:col-span-2'>
                    <h2 className='card-title'>Direction to Cooked</h2>
                    <ul className='space-y-2 py-4 text-gray-600'>
                        {cookingMethod}
                    </ul>
                </div>
            </div>
            {/* latest recepie card */}
            <div className='lg:w-[900px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 lg:gap-4 justify-center py-10 px-2'>
                <div className='p-2'>
                    <img className='w-full h-[250px]' src={image1} alt="" />
                    <div className='p-4 border'>
                        <h2>{recipe1}</h2>
                        <div className='flex justify-between'>
                            <Rating style={{ maxWidth: 100 }} value={3} readOnly></Rating>
                            <p className='text-gray-500'>1hrs 20min</p>
                        </div>
                        <div className='text-center'>
                            <button onClick={buttonOne} disabled={!favorite1} className='btn btn-primary mt-3 w-44'>Love It ?</button>
                        </div>
                    </div>
                </div>
                <div className='p-2'>
                    <img className='w-full h-[250px]' src={image2} alt="" />
                    <div className='p-4 border'>
                        <h2>{recipe2}</h2>
                        <div className='flex justify-between'>
                            <Rating style={{ maxWidth: 100 }} value={4} readOnly></Rating>
                            <p className='text-gray-500'>1hrs 20min</p>
                        </div>
                        <div className='text-center'>
                            <button onClick={buttonTwo} disabled={!favorite2} className='btn btn-primary mt-3 w-44'>Love It ?</button>
                        </div>
                    </div>
                </div>
                <div className='p-2'>
                    <img className='w-full h-[250px]' src={image3} alt="" />
                    <div className='p-4 border'>
                        <h2>{recipe3}</h2>
                        <div className='flex justify-between'>
                            <Rating style={{ maxWidth: 100 }} value={5} readOnly></Rating>
                            <p className='text-gray-500'>1hrs 20min</p>
                        </div>
                        <div className='text-center'>
                            <button onClick={buttonThree} disabled={!favorite3} className='btn btn-primary mt-3 w-44'>Love It ?</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ChefRecipe;