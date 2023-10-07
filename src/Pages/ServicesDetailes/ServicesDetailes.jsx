import React from 'react';
import { Link, Navigate, useLoaderData, useParams } from 'react-router-dom';

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
           
           </div>
        </div>
    );
};

export default ServicesDetailes;