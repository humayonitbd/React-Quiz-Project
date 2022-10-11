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
                <h4 className='text-center text-5xl py-5 text-red-500 font-bold'>Course Details</h4>
                <p className='text-center text-white'>Manusl simple dolar dolor sit amet consectetur adipisicing elit. Nobis, recusandae distinctio rem beatae rerum veritatis incidunt ratione dolor nulla minus itaque, molestias blanditiis</p>
            </div>
            <div className='course-container'>
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Home;