import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import swal from 'sweetalert';

const Register = () => {
  const {createUser, handleUpdateProfile, googleLogin} = useContext(AuthContext)
  const [error, setError] = useState('');
  const navegate = useNavigate()

    const handleSineUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photourl.value;
        const email = e.target.email.value; 
        const password = e.target.password.value; 
        console.log(name, email, password);
        setError('')

        if(password.length < 6){
          setError('Password must be at least 6 characters long') 
        } else if(!/[!@#\$%\^&\*_]/.test(password)){
          setError('"Your password must contain at least special char from -[ ! @ # $ % ^ & * _ ]"')
        } else if(!/[A-Z]/.test(password)){
          setError('"Your password must contain at least one uppercase letter"')
        } 


        createUser(email, password)
        .then(result => {
          console.log(result.user);
          handleUpdateProfile(name, photoUrl)
          .then(()=> {
            swal("Good job!", "Registration successful please login", "success");
            navegate('/login')
          })
        })
        .catch(error =>{
          console.error(error)
          setError("Email Already used")
        })
       }


       const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
          console.log(result.user);
          navegate('/')
          swal("Good job!", "login successful", "success");
    
        })
        .catch(error => {
          console.error(error)
        } )
       }

    
    return (
      <section className="bg-white  ">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto ">
          <div className="w-full max-w-md bg-slate-50 shadow-md p-5 rounded-md">
    
              <h1 className="mt-3 text-2xl font-semibold text-gray-500 text-center capitalize sm:text-3xl ">Sine Up</h1>
  
              <form onSubmit={handleSineUp}>
              <div className="relative  items-center mt-8">
              <label>Name</label>
                  <span className="absolute">

                  </span>
  
                  <input type="text" className="block w-full py-3 text-gray-900 bg-white border rounded-lg px-3 dark:bg-gray-100  dark:border-[#91c733] focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Name" name="name"/>
              </div>
              <div className="relative  items-center mt-4">
              <label>Photo URL</label>
                  <span className="absolute">

                  </span>
  
                  <input type="text" className="block w-full py-3 text-gray-900 bg-white border rounded-lg px-3 dark:bg-gray-100  dark:border-[#91c733] focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Photo URL" name="photourl"/>
              </div>
              <div className="relativeitems-center mt-4">
              <label>Email</label>
                  <span className="absolute">

                  </span>
  
                  <input type="email" className="block w-full py-3 text-gray-900 bg-white border rounded-lg px-3 dark:bg-gray-100  dark:border-[#91c733] focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" name="email" required/>
              </div>
  
              <div className="relative items-center mt-4">
                <label>Password</label>
                  <span className="absolute">

                  </span>
  
                  <input type="password" className="block w-full px-3 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-100  dark:border-[#91c733] focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" name="password" required/>
              </div>
              <button className=" mt-6 w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#91c733] rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" type="submit">
                      Sine Up
                  </button>
              </form>
  
              <div className="mt-6">
                  <p className='text-red-600'>{error}</p>
                  <p className="mt-4 text-center text-gray-600 dark:text-gray-400">or sign in with</p>
  
                  <a onClick={handleGoogleLogin} href="#" className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors hover:text-white duration-300 transform border rounded-lg dark:border-[#91c733]  hover:bg-gray-50 dark:hover:bg-[#91c733]">
                      <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                          <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                          <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                          <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                          <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                      </svg>
  
                      <span className="mx-2">Sign in with Google</span>
                  </a>
  
                  <div className="mt-6 text-center ">
                      <Link to="/login" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                          Don’t have an account yet? Login
                      </Link>
                  </div>
              </div>
          </div>
      </div>
  </section>
    );
};

export default Register;