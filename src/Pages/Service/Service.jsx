import React from "react";
import { Link } from "react-router-dom";

const Service = ({ card }) => {
  const {name, id, price, image, short_description } = card; 
    const textShort = short_description; 
    const cutText = textShort.slice(0, 120)
    console.log(cutText);
  return (
    <div className="relative flex flex-col rounded-xl h-[400px] bg-white bg-clip-border text-gray-700 shadow-md my-5 hover:bg-[#dceebd]">
      <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img
          src={image}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {name}
          </p>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased text-red-600">
            {price}
          </p>
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          {cutText}.....
        </p>
      </div>
      <div className="p-6 pt-0 flex justify-center items-center">
      <Link to={`/serviceDetailes/${id}`} className="btn bg-[#91c733] border-none py-1 text-white"> details</Link>
      </div>
    </div>
  );
};

export default Service;
