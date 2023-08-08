import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='lg:w-[550px] mx-auto'>
            <div>
                <img className='' src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=2000" alt="" />
            </div>
            <div className='text-center'>
                <Link className='active' to="/">Go Back To Home</Link>
                <h2>This is not the page you'r looking for!!</h2>
            </div>
        </div>
    );
};

export default Error;