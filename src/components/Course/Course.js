import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = ({course}) => {
    const {id, name, logo, total} = course;
    return (
        <div className='course'>
            <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Total Quiz: {total}</p>
                <div className="card-actions justify-end">
                <Link to={`/home${id}`}><button className="btn btn-primary">Start-Practice</button></Link>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Course;