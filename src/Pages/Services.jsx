import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service/Service';
import { Helmet } from 'react-helmet';

const Services = () => {

    const cards = useLoaderData()
    console.log(cards);

    return (
        <div className='max-w-7xl mx-auto lg:mb-8 mb-3'>
            <Helmet>
                    <title>Tech Conferences and Expos | Services</title>
            </Helmet>
            <div className='min-h-screen'>
                <h1 className='text-center text-slate-900 text-2xl lg:text-3xl font-bold lg:pt-10 flex justify-center' data-aos="zoom-in-down">Our Services</h1>
                <hr className=" w-[13%] border-[#91c733] border-2 m-auto mb-4 "  data-aos="zoom-in-down"/>
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