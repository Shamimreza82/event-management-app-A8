import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service/Service';

const Services = () => {

    const cards = useLoaderData()
    console.log(cards);

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='min-h-screen'>
                <h1 className='text-center text-2xl lg:text-3xl font-bold lg:pt-10 flex justify-center'>Our Services</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5 gap-1 '>
                    {
                        cards?.map(card => <Service key={card.id} card ={card}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;