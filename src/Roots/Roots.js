import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';

export const LoderdataContext = createContext([])

const Roots = () => {
    const coursesData = useLoaderData();
    const courses = coursesData.data;
    // console.log(courses)
    return (
        <LoderdataContext.Provider value={courses}>
            <Header></Header>
            <Outlet></Outlet>
        </LoderdataContext.Provider>
    );
};

export default Roots;