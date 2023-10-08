import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from '../assets/logo.jpg'

const Navber2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="py-4 bg-slate-900 lg:px-6 px-3 font-roboto ">
      <div className="relative flex items-center justify-between">
        
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
          data-aos="fade-right"
        >
          <img className="rounded-full w-[50px]" src={logo} alt="" />
          <span className="ml-2 text-base lg:text-xl font-bold tracking-wide text-white uppercase">
            Tech Conferences and Expos
          </span>
        </a>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#91c733]   "
                : "text-green-50 hover:scale-125 hover:duration-300 duration-300 hover:rounded-md "
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#91c733] "
                : "text-green-50 hover:scale-125 hover:duration-300 duration-300 hover:rounded-md"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#91c733] "
                : "text-green-50 hover:scale-125 hover:duration-300 duration-300 hover:rounded-md"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/ourTeam"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#91c733] "
                : "text-green-50 hover:scale-125 hover:duration-300 duration-300 hover:rounded-md"
            }
          >
            Our Team
          </NavLink>
          {user && (
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#91c733] "
                  : "text-green-50 hover:scale-125 hover:duration-300 duration-300 hover:rounded-md"
              }
            >
              Blog
            </NavLink>
          )}

          {user && (
            <NavLink
              to="/techNews"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#91c733] "
                  : "text-green-50 hover:scale-125 hover:duration-300 duration-300 hover:rounded-md"
              }
            >
              Tech News
            </NavLink>
          )}
          {user ? (
            <div className="flex gap-2 items-center">
              <div className="text-center">
              <img
                className="rounded-full h-[40px] border-2 border-[#91c733] ml-6"
                src={user.photoURL}
                alt=""
              />
              <p className="text-sm font-bold text-[#91c733]">{user.displayName}</p>
              </div>
              <Link
                onClick={handleLogout}
                to="/login"
                className="btn bg-[#91c733] border-none py-1 hover:text-green-700"
              >
                {" "}
                Logout
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-[#91c733] border-none py-1 hover:text-green-700"
            >
              {" "}
              Login
            </Link>
          )}
        </ul>

        {/* mobile view -------------------------------------------------------------- */}

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-20">
              <div className="p-5 bg-slate-800 border rounded shadow-sm "  data-aos="zoom-in">
                <div className="flex items-center justify-between mb-4">
                  <div className="items-center">
                    <img className="rounded-full w-[40px]" src={logo} alt="" />
                    <Link
                      to="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                        Tech Conferences and Expos
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav className="">
                  <ul className="space-y-6 text-center ">
                      <a
                      href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-white px-10 py-2 transition-colors duration-200 hover:text-deep-purple-accent-400 bg-[#91c733] p-1 rounded block"
                      >
                        Home
                      </a>
                      <a
                        href="/services"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-white px-10 py-2  transition-colors duration-200 hover:text-deep-purple-accent-400 bg-[#91c733] p-1 rounded block "
                      >
                        Services
                      </a>

                      <a
                        href="/about"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-white  px-10 py-2  transition-colors duration-200 hover:text-deep-purple-accent-400 bg-[#91c733] p-1 rounded block"
                      >
                        About Us
                      </a>
                      <a
                        href="/ourTeam"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-white px-10 py-2  transition-colors duration-200 hover:text-deep-purple-accent-400 bg-[#91c733] p-1 rounded block "
                      >
                        Our Team
                      </a>
                    
                      <div>
                      {user && (
                        <a
                        href="/ourTeam"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-white px-10 py-2  transition-colors duration-200 hover:text-deep-purple-accent-400 bg-[#91c733] p-1 rounded block "
                      >
                        Blog
                      </a>
                      )}
                      </div>
                      

                      {user && (
                        <a
                        href="/techNews"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-white px-10 py-2  transition-colors duration-200 hover:text-deep-purple-accent-400 bg-[#91c733] p-1 rounded block "
                      >
                        Tech News
                      </a>
                      )}

                      {user ? (
                        <div className="flex gap-20 justify-between items-center">
                          <div className=" flex items-center space-x-2 border p-2 rounded-full">
                          <img
                            className="rounded-full h-[45px] border-2 border-bg-green-50 m-auto"
                            src={user.photoURL}
                            alt=""
                          />
                          <p className="text-base font-bold text-[#91c733]">{user.displayName}</p>
                          </div>
                          <a
                            onClick={handleLogout}
                            href="/login"
                            className="btn bg-red-600 border-none text-white "
                          >
                            {" "}
                            Logout
                          </a>
                        </div>
                      ) : (
                        <a
                        href="/login"
                          className="btn w-full"
                        >
                          {" "}
                          Login
                        </a>
                      )}
                  
                    <li>
                      <a
                        href="/register"
                        className="btn w-full bg-slate-950 text-white"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Sign up
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber2;
