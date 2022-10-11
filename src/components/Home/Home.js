import React, { useContext } from 'react';
import { LoderdataContext } from '../../Roots/Roots';
import Course from '../Course/Course';
import './Home.css'

const Home = () => {
    const courses = useContext(LoderdataContext);
    // console.log(courses)
    return (
        <div className='main-courses-container'>
            <div className='course-detaisl'>
            <h4 className='text-center lg:text-5xl text-xl py-2 lg:py-5 text-red-500 font-bold'>Course Details</h4>
                <p className='text-center text-white lg:text-xl'>Alison is one of the world’s largest free learning platforms for education and skills training. It is a for-profit social enterprise dedicated to making it possible for anyone, to study anything, anywhere, at any time, for free online, at any subject level. Through our mission we are a catalyst for positive social change, creating opportunity, prosperity, and equality for everyone.</p>
            </div>
            <h2 className='bg-red-600 my-5 py-3 text-center text-3xl font-bold text-white'>Our Courses </h2>
            <div className='course-container'>
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Home;