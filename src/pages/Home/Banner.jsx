import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[#e4d3c9] pt-32 md:pt-80 relative overflow-hidden">

            <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-5 md:gap-0 relative">
                {/* Left Content */}
                <div className="bg-white mx-4 md:ml-10 z-30">
                    <div className="p-5 md:p-10">
                        <h1 className="text-2xl md:text-4xl font-bold">We Create Websites</h1>
                        <p className="py-4 md:w-3/4 text-sm md:text-base">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam sit illum sed inventore. Vitae maiores, veritatis quia eveniet fuga doloribus officiis ullam culpa architecto vero doloremque amet quasi neque corrupti.
                        </p>
                        <p className="py-2 text-sm md:text-base">We are updating</p>
                        <button className="border-2 rounded-xl bg-black text-white px-6 py-3 uppercase text-sm md:text-base">
                            View Portfolio
                        </button>
                    </div>
                </div>

                {/* Right Content */}
                <div className="relative h-[400px] md:h-auto">
                    {/* Background Yellow Box */}
                    <div className="bg-[#F0A901] w-[200px] h-[250px] md:w-[400px] md:h-[500px] absolute -top-24 md:-top-60 right-4 md:right-10 z-10 rounded-lg" />

                    {/* Floating Card */}
                    <div className="bg-[#C8BBB4] w-[90%] sm:w-[350px] md:w-[480px] p-4 md:p-10 absolute top-10 md:-top-36 right-4 md:right-20 z-40 grid grid-cols-3 gap-2 items-center">
                        <img src="/man.png" alt="man" className="w-full h-auto" />
                        <img src="/man2.png" alt="man2" className="w-full h-auto" />
                        <img src="/pen.png" alt="pen" className="w-full h-auto transform -rotate-90" />
                    </div>

                    {/* Banner Image */}
                    <div className="w-[90%] sm:w-[350px] md:w-[500px] h-[200px] md:h-[300px] absolute  top-32 md:-top-20 right-4 md:right-60 z-30">
                        <img src="/bg1.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
