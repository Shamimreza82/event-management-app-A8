import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ServicesDetailes = () => {
    const {id} = useParams(); 
    const allServises = useLoaderData()

    const findData = allServises.find(allService => allService.id !== id);
    console.log(findData);

    return (
        <div className='min-h-screen py-10 max-w-4xl m-auto px-3'>
            <img className='w-full rounded-lg' src={findData.image} alt="" />
            <p className='text-3xl my-2 font-bold'>{findData.name}</p>
            <p>{findData.short_description}</p>
           <div className='flex justify-end'>
           <Link to='/' className='bg-red-600 rounded-md px-2 text-white'> Back to home page</Link>
           </div>
        </div>
    );
};

export default ServicesDetailes;