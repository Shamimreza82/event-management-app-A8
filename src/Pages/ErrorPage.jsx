import React from "react";
import bg from '../assets/Event Management and Planning.jpg'
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className=" min-h-screen px-4 py-24 mx-auto max-w-7xl flex ">
      <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
        <div>
          <p className="mb-2 text-4xl font-semibold tracking-wide text-red-600 uppercase">
            Error 404
          </p>
          <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">
            Oops! The page you're looking for isn't here.
          </h1>
          <p className="mb-5 text-base text-left text-gray-800 md:text-xl">
            You might have the wrong address, or the page may have moved.
          </p>
          <div className="space-x-5">
          <Link
            to='/'
            className="w-full mb-2 p-2 rounded-md bg-red-600 text-white btn-lg btn-light sm:w-auto sm:mb-0"
          >
            Back to homepage
          </Link>
          <Link
            to='/'
            className="w-full mb-2 p-2 rounded-md bg-[#91c733] btn-lg btn-light sm:w-auto sm:mb-0"
          >
            Contact
          </Link>
          </div>
          
        </div>
        <div>
          <div className="w-full h-full p-3 bg-[#91c733] rounded-lg">
            <img src={bg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
