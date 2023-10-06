import React from 'react';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <div className='min-h-screen bg-slate-300'>
                <h1>Home</h1>
            </div>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;