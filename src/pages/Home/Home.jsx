import React from 'react';
import Banner from './Banner';
import ServicesSection from './ServicesSection';
import Portfolio from '../Portfolio/Portfolio';
import Brand from './Brand/Brand';
import Construction from './Construction/Construction';
import WhatWeDo from './WhatWeDo/WhatWeDo';

const Home = () => {
    return (
        <div>
               <Banner></Banner> 
                <ServicesSection></ServicesSection>
                <Portfolio></Portfolio>
                <Brand></Brand> 
                <Construction></Construction>
                <WhatWeDo></WhatWeDo>
        </div>
    );
};

export default Home;