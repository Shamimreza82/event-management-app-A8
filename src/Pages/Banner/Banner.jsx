import React from "react";
import "./Banner.css";

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
              "url(https://i.ibb.co/VwxqNj9/Registration-and-Badge-Services.jpg)",
          }}
        >
          <div className="hero-overlay  backdrop-brightness-75"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">Event Management and Planning</h1>
              <h1 className="mb-5 text-5xl font-bold text-white">Event Management and Planning</h1>
              <p className="mb-5">
              Our Event Management and Planning service offers comprehensive event planning and management solutions. We handle all as.....
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </swiper-slide>

    </swiper-container>
  );
};

export default Banner;
