import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServicesDetailes = () => {
    const {id} = useParams(); 
    const allServises = useLoaderData()

    const findData = allServises.find(allService => allService.id !== id);
    console.log(findData);

    return (
        <div className='min-h-screen py-10 max-w-4xl m-auto'>
            <img className='w-full rounded-lg' src={findData.image} alt="" />
            <p>{findData.short_description}</p>
        </div>
    );
};

export default ServicesDetailes;