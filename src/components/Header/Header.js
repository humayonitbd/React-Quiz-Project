import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-base-300'>
            <div className="navbar w-10/12 m-auto">
            <div className="flex-1">
                <a href='f' className="btn btn-ghost normal-case text-xl">Courses Quiz Website</a>
            </div>
            <div className="flex-none">
                <ul className='lg:flex hidden lg:block pt-3'>
                    <li className='mr-10'><NavLink to='/home'>Home</NavLink></li>
                    <li className='mr-10'><NavLink to='/chart'>Chart</NavLink></li>
                    <li className='mr-10'><NavLink to='/about'>Aboute</NavLink></li>
                    <li className='mr-10'><NavLink to='/blog'>Blog</NavLink></li>
                </ul>
                <div className="dropdown dropdown-end block lg:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img alt='' src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/chart'>Chart</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/blog'>Blog</NavLink></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;