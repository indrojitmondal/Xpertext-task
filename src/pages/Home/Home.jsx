import React from 'react';
import Banner from './Banner';
import ServicesSection from './ServicesSection';
import Portfolio from '../Portfolio/Portfolio';
import Brand from './Brand/Brand';

const Home = () => {
    return (
        <div>
               <Banner></Banner> 
                <ServicesSection></ServicesSection>
                <Portfolio></Portfolio>
                <Brand></Brand>
        </div>
    );
};

export default Home;