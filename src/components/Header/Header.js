import React from 'react';
import { Bars3Icon} from '@heroicons/react/24/solid'
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
                <label tabIndex={0}>
                    <Bars3Icon className="h-6 w-6"/>
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