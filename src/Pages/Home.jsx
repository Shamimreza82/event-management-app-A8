import React from 'react';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import OurTeam from './OurTeam';


const Home = () => {
    return (
        <div >
            <div style={{backgroundImage: `url(https://i.ibb.co/PCY2V0S/Event-Management-and-Planning.jpg)`, 
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backdropFilter: 'blur(5px)'}
        
            
        } className='min-h-screen bg-slate-300 brightness-50'>
               
            </div>
            <div >
                <Services></Services>
                <OurTeam></OurTeam>
                <About></About>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;