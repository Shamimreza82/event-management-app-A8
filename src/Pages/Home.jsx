import React from 'react';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import OurTeam from './OurTeam';
import Banner from './Banner/Banner';
import { Helmet } from 'react-helmet';
import Marquee from 'react-fast-marquee';


const Home = () => {
    return (
        <div >
            <Helmet>
                    <title>Tech Conferences and Expos | Home</title>
            </Helmet>
            
            {/* <div style={{backgroundImage: `url(https://i.ibb.co/PCY2V0S/Event-Management-and-Planning.jpg)`, 
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backdropFilter: 'blur(5px)'}
        
            
        } className='min-h-screen bg-slate-300 brightness-50'>
               
            </div> */}
            <div >
                <Banner></Banner>
                <Services></Services>
                <OurTeam></OurTeam>
                <About></About>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;