import React from 'react';
import { FiMenu } from 'react-icons/fi';
const Navbar = () => {
    return (
        <div className="navbar bg-white shadow-sm px-10">
            <div className="flex-1">
                {/* <a className="text-gray-500 font-semibold text-xl">logo</a>
                 */}
                <img src='/logo.png' className='w-40' alt="Xpertex" />
            </div>
            <div className="flex-none">
                <button className="btn btn-ghost">
                    <FiMenu className="text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;