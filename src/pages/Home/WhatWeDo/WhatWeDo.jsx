import React from 'react';

const WhatWeDo = () => {
    return (
        <div className='bg-[#000000]'>
            <div className='px-10 pb-10 '>

                <h2 className='text-center py-10 text-2xl text-[#E6A919]'>What We Do</h2>

                <div className='grid grid-cols-1 md:grid-cols-3'>

                    <div> 
                        <h2 className='text-[#725E38] text-xl font-bold pb-5'>Strategy.</h2>
                        <ul className='text-white space-y-2 '>
                            <li><a href="" className='hover:underline'>Analytics and Research</a></li>
                            <li><a href="" className='hover:underline'>Interactive Workshops</a></li>
                            <li><a href="" className='hover:underline'>Brand Strategy</a></li>
                            <li><a href="" className='hover:underline'>Content Strategy</a></li>
                            <li><a href="" className='hover:underline'>Digital Strategy</a></li>
                            <li><a href="" className='hover:underline'>Conversion Rate Optimization</a></li>
                        </ul>
                    </div>

                    <div> 
                        <h2 className='text-[#725E38] text-xl font-bold pb-5'>Design.</h2>
                        <ul className='text-white space-y-2 '>
                            <li><a href="" className='hover:underline'>Creative Direction</a></li>
                            <li><a href="" className='hover:underline'>Brand Guides</a></li>
                            <li><a href="" className='hover:underline'>Prototypes</a></li>
                            <li><a href="" className='hover:underline'>UI/UX & Web Design</a></li>
                            <li><a href="" className='hover:underline'>Visual Asset Creation</a></li>

                            <li><a href="" className='hover:underline'>Motion Design</a></li>
                        </ul>
                    </div>

                    <div> 
                        <h2 className='text-[#725E38] text-xl font-bold pb-5'>Development.</h2>
                        <ul className='text-white space-y-2 '>
                            <li><a href="" className='hover:underline'>System Architecture Design</a></li>
                            <li><a href="" className='hover:underline'>Full Stack Development</a></li>
                            <li><a href="" className='hover:underline'>3rd Party Integration</a></li>
                            <li><a href="" className='hover:underline'>Performance Optimization</a></li>
                            <li><a href="" className='hover:underline'>Wordpress Development</a></li>
                            <li><a href="" className='hover:underline'>Shopify Development</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;