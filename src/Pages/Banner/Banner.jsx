import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <swiper-container
      className="mySwiper max-w-7xl"
      pagination="true"
      pagination-dynamic-bullets="true"
    >
      <swiper-slide>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/PCY2V0S/Event-Management-and-Planning.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-70 brightness-0 "></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="hover:scale-105 hover:duration-500 duration-500">
              {/* <h1
                className="mb-5 lg:text-5xl text-4xl font-bold text-white  "
                data-aos="zoom-in"
              >
                Tech Conferences and Expos
              </h1> */}
              <h1 className="mb-5 lg:text-5xl text-2xl font-bold text-white" data-aos="zoom-in-down">
                Event Management and Planning
              </h1>
              <p className="mb-5 max-w-md m-auto">
                Our Event Management and Planning service offers comprehensive
                event planning and management solutions. We handle all as.....
              </p>
              <Link
                to="/ourTeam"
                className="btn bg-[#91c733] border-none py-1 hover:text-[#91c733] hover:bg-slate-900"
                data-aos="zoom-in">
                
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/pnTbCTg/Venue-and-Space-Management.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-70 brightness-0 "></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 lg:text-5xl text-2xl font-bold text-white" >
                Venue and Space Management
              </h1>
              <p className="mb-5">
                Efficiently utilize space and select the perfect venue with our
                Venue and Space Management service. We specialize in opt.....
              </p>
              <Link
                to="/ourTeam"
                className="btn bg-[#91c733] border-none py-1 hover:text-green-700"
              >
                {" "}
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/VwxqNj9/Registration-and-Badge-Services.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-70 brightness-0 "></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 lg:text-5xl text-2xl font-bold text-white">
                Registration and Badge Services
              </h1>
              <p className="mb-5">
                Streamline your event's check-in process with our Registration
                and Badge Services. We offer online registration and badg.....
              </p>
              <Link
                to="/ourTeam"
                className="btn bg-[#91c733] border-none py-1 hover:text-green-700"
              >
                {" "}
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/0YL03YG/Exhibitor-Services.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-70 brightness-0 "></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 lg:text-5xl text-2xl font-bold text-white">Exhibitor Services</h1>
              <p className="mb-5">
              Our Exhibitor Services are designed to empower your exhibitors with effective booth design and lead retrieval systems. 
              </p>
              <Link to='/ourTeam' className="btn bg-[#91c733] border-none py-1 hover:text-green-700"> Meet Our Team</Link> 
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  );
};

export default Banner;
