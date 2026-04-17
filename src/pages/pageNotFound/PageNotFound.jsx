import React from 'react';
import { Link } from 'react-router';

const PageNotFound = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-2">
            <div className="bg-white p-4 md:p-12 rounded-3xl shadow-2xl max-w-md w-full text-center border border-gray-100">
                
                <h1 className="text-8xl md:text-9xl font-black text-[#244D3F] mb-2">
                    404
                </h1>
                
                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase">
                        Page Not Found
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </div>

            
                <div className="mt-10">
                    <Link 
                        to="/" 
                        className="inline-block w-full px-8 py-4 bg-[#244D3F] text-white font-bold rounded-xl hover:bg-[#1a3a2f] transition-all duration-300 shadow-lg shadow-[#244D3F]/20  uppercase text-sm"
                    >
                        Back to Homepage
                    </Link>
                </div>

                <div className="mt-3 border-t border-gray-50">
                    <p className="text-sm text-gray-400">Error Code: 0x404_NOT_FOUND</p>
                </div>
                
            </div>
        </div>
    );
};

export default PageNotFound;