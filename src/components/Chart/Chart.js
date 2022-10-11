import React, { useContext } from 'react';
import { LoderdataContext } from '../../Roots/Roots';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const courses = useContext(LoderdataContext)
    // console.log(courses)
    
    return (
        <div className='flex justify-center align-center'>
            <div>
            <h4 className='text-center text-red-700 text-3xl font-bold my-8'>Quiz total chart</h4>
            
            <BarChart width={500} height={400} data={courses}>
            <Bar dataKey="total" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
            </BarChart>
            
            </div>
        </div>
    );
};

export default Chart;