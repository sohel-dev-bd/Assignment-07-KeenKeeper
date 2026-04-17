import React from 'react';
import logo from '../../assets/images/logo-xl.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'


const Footer = () => {
    return (
        <div className='bg-[#244D3F] py-20 mt-20'>
            <div className='w-10/12 mx-auto'>
                <div className='text-center'>
                    <div className='flex justify-center items-center mb-2'>
                        <img src={logo} alt="keenKeeper Logo here" />
                    </div>
                    <p><small className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</small></p>
                    <p className='text-2xl font-medium text-white'>Social Links</p>
                </div>
                <div className='flex justify-center items-center mt-2.5'>
                    <div className='flex gap-2'>
                        <a href="https://www.instagram.com/mrrana6526/" target='blank'><img src={instagram} alt="" /></a>
                        <a href="https://www.facebook.com/MrRana26" target='blank'><img src={facebook} alt="" /></a>
                        <a href="https://x.com/MASUDURRAH73320" target='blank'><img src={twitter} alt="" /></a>
                    </div>
                </div>
                <hr className='mt-10 mb-10 border-white opacity-10' />

                <div className='flex flex-col md:flex-row text-center md:text-left justify-between space-y-2'>
                    <span className='text-[#FAFAFA]'>© 2026 KeenKeeper. All rights reserved.</span>
                    <div className='flex flex-col md:flex-row gap-6'>
                        <span className='text-[#FAFAFA]'>Privacy Policy</span>
                        <span className='text-[#FAFAFA]'>Terms of Service</span>
                        <span className='text-[#FAFAFA]'>Cookies</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;