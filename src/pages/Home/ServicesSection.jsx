import React from 'react';
import { FaBullseye, FaPaintBrush, FaCode, FaLaptopCode } from 'react-icons/fa';

const services = [
    {
        icon: <FaBullseye size={28} className="text-gray-700" />,
        title: 'STRATEGY',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.',
        bg: 'bg-transparent',
        text: 'text-black',
        contentBg: '',
    },
    {
        icon: <FaPaintBrush size={28} className="text-white bg-orange-500 p-1 rounded-full" />,
        title: 'BRANDING',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.',
        bg: 'bg-white',
        text: 'text-black',
        contentBg: '',
    },
    {
        icon: <FaCode size={28} className="text-gray-700" />,
        title: 'DEVELOPMENT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.',
        bg: 'bg-transparent',
        text: 'text-black',
        contentBg: '',
    },
    {
        icon: <FaLaptopCode size={28} className="text-white" />,
        title: 'WEB DESIGN',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.',
        bg: 'bg-orange-500',
        text: 'text-white',
        contentBg: 'bg-orange-500',
    },
];
const ServicesSection = () => {
    return (
        <div>
            <section className="bg-[#e4d3c9] py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Epic design and engineering</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mb-12">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                   
                </div>
                 {/* Grid for service cards */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-10 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`p-6 text-center rounded-lg shadow-sm ${service.bg} ${service.text} transition-all duration-300`}
                            >
                                <div className="flex justify-center mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="font-semibold mb-2">{service.title}</h3>
                                <p className="text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
            </section>
        </div>
    );
};

export default ServicesSection;