import React from 'react';
import websiteImage from './web-design.jpg'
import mobileAppImage from './mobile-application.jpg'
import corporateImage from './coporate.jpg'
import mobileImage from './mobile.jpg'
import responsiveImage from './responsive.jpg'
import digitalImage from './digitalProduct.jpg'
const Portfolio = () => {
    return (
        <div>
                <section className="bg-[#272C32] py-16 text-white">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
                    <p className=" max-w-2xl mx-auto mb-12">
                    At Xpertex, We leverage React, Node.js, and MongoDB expertise to build robust, scalable, user-centric web applications, driving innovation, efficiency, and measurable business val
                    </p>

                    

                    

                   
                </div>

                
                <div className='px-10 grid grid-cols-2 md:grid-cols-3 gap-5'>

                        <div>
                            <img src={websiteImage} alt="" />
                             <p className='text-center bg-white text-black py-5'>Website Design</p>
                        </div>

                        <div>
                            <img src={mobileAppImage} alt="" />
                             <p className='text-center bg-white text-black py-5'>Mobile Application</p>
                        </div>
                        <div>
                            <img src={corporateImage} alt="" />
                             <p className='text-center bg-white text-black py-5'>Corporate Design</p>
                        </div>

                        <div>
                            <img src={mobileImage} alt="" />
                             <p className='text-center bg-white text-black py-5'>Mobile Application</p>
                        </div>

                        <div>
                            <img src={responsiveImage} alt="" />
                             <p className='text-center bg-white text-black py-5'>Responsive Design</p>
                        </div>

                        <div>
                            <img src={digitalImage} alt="" />
                             <p className='text-center bg-white text-black py-5'>Digital Product</p>
                        </div>

                </div>
            </section>
        </div>
    );
};

export default Portfolio;