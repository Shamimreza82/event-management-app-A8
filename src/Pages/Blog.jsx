import React from 'react';
import bg1 from '../assets/1.jpg'
import bg2 from '../assets/2.jpg'
import bg3 from '../assets/3.jpg'
import bg4 from '../assets/4.jpg'
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <section className=" dark:text-gray-100">
			<Helmet>
            <title>Tech Conferences and Expos | Blog</title>
         </Helmet>
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 rounded-md">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-200 shadow-md">
			<img src={bg1} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-200 hover:scale-105 hover:duration-300 " />
			<div className="p-6 space-y-2 lg:col-span-5 text-black">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Knowledge Sharing: </h3>
				<span className="text-xs dark:text-gray-400">February 19, 2021</span>
				<p>These events offer a platform for experts and thought leaders to share insights, research, and best practices. Attendees can gain valuable knowledge about cutting-edge technologies, industry trends, and future forecasts.</p>
			</div>
		</a>


		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-black ">
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-slate-200 rounded-lg hover:scale-105 duration-500">
				<img role="presentation" className=" object-cover w-full rounded h-44 dark:bg-gray-500 " src={bg2} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Networking Opportunities:</h3>
					<span className="text-xs dark:text-black">January 21, 2023</span>
					<p>Building a professional network is crucial in the tech world. Conferences and expos provide opportunities to connect with like-minded individuals, potential collaborators, and even mentors.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-slate-200 rounded-lg hover:scale-105 duration-500">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500 " src={bg3} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Product Showcase:</h3>
					<span className="text-xs dark:text-black">January 22, 2023</span>
					<p>Many tech companies use these events to launch and showcase their latest products and innovations. Attendees can get hands-on experience with new technology and provide feedback directly to the developers.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-slate-200 rounded-lg hover:scale-105 duration-500">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500 " src={bg4}/>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Career Advancement: </h3>
					<span className="text-xs dark:text-black">January 23, 2023</span>
					<p>Tech conferences and expos are ideal places to discover job opportunities, whether you're seeking a new position or looking to hire top talent. You can explore job fairs, engage with recruiters, and attend career-oriented workshops.</p>
				</div>
			</a>
			
		</div>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-[#91c733] dark:text-white">Load more posts...</button>
		</div>
	</div>
</section>
    );
};

export default Blog;