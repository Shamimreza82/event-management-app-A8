import React from "react";
import img1 from '../assets/a.jpg'
import img2 from '../assets/b.jpg'
import img3 from '../assets/c.jpg'

const TechNews = () => {
  return (
    <section className="bg-white text-black px-3 ">
      <div className="mx-auto lg:py-8 py-3 lg:w-[70%] m-auto text-black flex justify-center items-center " data-aos="fade-down">
        <div >
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-5xl ">
        RSA Conference 2023
        </h1>
        <div className="mt-6  lg:mt-0 ">
            <a
              href="#"
              className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline "
            >
              24th - 27th of April, 2023
            </a>
            <a
              href="#"
              className="block mt-4 text-xl font-semibold text-red-600 hover:underline "
            >
              San Francisco, California
            </a>

            <p className="mt-3 text-sm text-gray-500  md:text-sm">
            The world’s leading security conference will take place in San Francisco from the 24th to the 27th of April, 2023. For three days, you’ll deep dive into the latest trends in security, with interactive programs like their Learning Labs and training sessions. You’ll get the chance to take part in activities conducted by industry leaders and providers in an in-person setting.
            </p>

            <a
              href="#"
              className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
            >
              Read more
            </a>
          </div>
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover w-full lg:mx-6 rounded-xl h-72 lg:h-96"
            src={img1}
            alt=""
          />
        </div>
        </div>
      </div>

      {/* card 2 */}
      <div className="mx-auto lg:py-8 py-3 lg:w-[70%] m-auto text-black flex justify-center items-center " data-aos="fade-right">
        <div >
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-5xl ">
        Mobile World Congress (MWC)
        </h1>
        <div className="mt-6  lg:mt-0 ">
            <a
              href="#"
              className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline "
            >
              27th February - 2nd March 2023 
            </a>
            <a
              href="#"
              className="block mt-4 text-xl font-semibold text-red-600 hover:underline "
            >
             Barcelona, Spain 
            </a>

            <p className="mt-3 text-sm text-gray-500  md:text-sm">
            From blockchain to robotics, MWC is the ultimate event focusing on the future of the connectivity ecosystem. Some of the primary exhibitors and keynote speakers this year will include the CEO of Orange Group, the Chairman and CEO of Telefónica, and the President and CEO of the Ericsson Group, among others. What are you waiting for? Get a ticket now!
            </p>

            <a
              href="#"
              className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
            >
              Read more
            </a>
          </div>
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover w-full lg:mx-6 rounded-xl h-72 lg:h-96"
            src={img2}
            alt=""
          />
        </div>
        </div>
      </div>
        {/* card 3 */}
        <div className="mx-auto lg:py-8 py-3 lg:w-[70%] m-auto text-black flex justify-center items-center " data-aos="flip-right">
        <div >
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-5xl ">
        LEAP 2023
        </h1>
        <div className="mt-6  lg:mt-0 ">
            <a
              href="#"
              className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline "
            >
              6th-9th February 2023
            </a>
            <a
              href="#"
              className="block mt-4 text-xl font-semibold text-red-600 hover:underline "
            >
             Riyadh, Saudi Arabia
            </a>

            <p className="mt-3 text-sm text-gray-500  md:text-sm">
            This year’s LEAP event will feature over 500 expert speakers on a range of key topics such as smart cities, energy, creative economy, health tech, and more. Some exciting speakers lined up for this year will include representatives from West Ham United, Flutterwave, Coinbase, and more. The veteran footballer Roberto Carlos is even scheduled to make an appearance!
            </p>

            <a
              href="#"
              className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
            >
              Read more
            </a>
          </div>
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover w-full lg:mx-6 rounded-xl h-72 lg:h-96"
            src={img3}
            alt=""
          />
        </div>
        </div>
      </div>

    </section>
  );
};

export default TechNews;
