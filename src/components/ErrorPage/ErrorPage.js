import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center align-center mt-80'>
           <div className='text-center'>
           <h1 className='text-5xl'>Page is found!!</h1>
            <h1 className='text-3xl'>404</h1>
            <Link to='/home'><p className='underline underline-offset-1 text-red-600'>back page</p></Link>
           </div>
        </div>
        </div>
    );
};

export default ErrorPage;