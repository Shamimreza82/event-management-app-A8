import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const ServicesDetailes = () => {
    const {id} = useParams(); 
    const allServises = useLoaderData()
    const navigate = useNavigate()

    const findData = allServises.find(allService => allService.id == id);
    console.log(findData);

    return (
        <div className='my-8 rounded-md lg:max-w-3xl m-auto lg:px-5 px-3 p-5 bg-slate-100 shadow-md '>
            <img className='w-full rounded-lg border-2 border-[#91c733] ' src={findData.image} alt="" />
            <p className='text-3xl my-2 font-bold lg:py-4 '>{findData.name}</p>
            <p>{findData.short_description}</p>
           <div className='flex justify-between items-center '>
            
              <div>
                  <button className='btn bg-red-600 text-white mt-2 hover:text-red-600'>Buy Now</button>
                 <button onClick={()=>navigate(-1)} className='btn bg-[#91c733] text-white mt-2 hover:text-red-600'>Back</button>
              </div>
                <p className='text-xl font-bold text-slate-900'>{findData.price}</p>
            
           </div>
        </div>
    );
};

export default ServicesDetailes;