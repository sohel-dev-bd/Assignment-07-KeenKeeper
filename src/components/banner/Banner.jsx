import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='text-center py-20'>
                <h1 className=' text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937]'>Friends to keep close in your life</h1>
                <p className='text-[#64748B] mt-4'><small>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</small></p>
                <button className='mt-8 btn bg-[#244D3F] shadow-sm text-white'><FaPlus /> Add a Friend</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                <div className='text-center bg-white rounded-2xl space-y-2 py-8 shadow-sm'>
                    <h1 className='text-3xl font-semibold text-[#244D3F]'>10</h1>
                    <p className='text-[18px] text-[#64748B]'>Total Friends</p>
                </div>

                <div className='text-center bg-white rounded-2xl space-y-2 py-8 shadow-sm'>
                    <h1 className='text-3xl font-semibold text-[#244D3F]'>3</h1>
                    <p className='text-[18px] text-[#64748B]'>On Track</p>
                </div>

                <div className='text-center bg-white rounded-2xl space-y-2 py-8 shadow-sm'>
                    <h1 className='text-3xl font-semibold text-[#244D3F]'>6</h1>
                    <p className='text-[18px] text-[#64748B]'>Need Attention</p>
                </div>

                <div className='text-center bg-white rounded-2xl space-y-2 py-8 shadow-sm'>
                    <h1 className='text-3xl font-semibold text-[#244D3F]'>12</h1>
                    <p className='text-[18px] text-[#64748B]'>Interactions This Month</p>
                </div>
            </div>

            <hr className='mt-10 mb-10 opacity-20'/>

        </div>
    );
};

export default Banner;