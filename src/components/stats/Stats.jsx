import React, { useContext } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { CallFriendContext } from '../../context/CallContext';
import { LuDatabaseBackup } from 'react-icons/lu';

const Stats = () => {
    const { callFriends } = useContext(CallFriendContext);

    const callCount = callFriends.filter(count => count.type === 'Call').length;
    const textCount = callFriends.filter(count => count.type === 'Text').length;
    const videoCount = callFriends.filter(count => count.type === 'Video').length;
    const count = callFriends.filter(count => count).length;

    const chartData = [
        { name: 'Call', value: callCount },
        { name: 'Text', value: textCount },
        { name: 'Video', value: videoCount },
    ];


    


    const COLORS = ['#244D3F', '#7E35E1', '#37A163'];

    return (
        <div className='w-10/12 mx-auto py-20'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-5'>Friendship Analytics</h1>
            

            <div className='bg-white rounded-md p-8 shadow-sm'>
                <h3 className='mb-10 text-xl font-semibold'>By Interaction Type</h3>

                <div className='flex justify-center items-center w-full'>

                    {count !== 0 ? <div style={{ width: '100%', maxWidth: '250px', minHeight: '250px' }}>
                        <ResponsiveContainer width="100%" aspect={1}>
                            <PieChart>
                                <Tooltip/>
                                <Pie
                                    data={chartData}
                                    innerRadius="80%"
                                    outerRadius="100%"
                                    cornerRadius={10}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div> : <h1 className='flex items-center justify-center gap-3 py-20 font-medium text-gray-700 text-2xl'>No Data Found <LuDatabaseBackup /></h1>}
                </div>

                
                <div className='flex justify-center items-center mt-10'>
                    <div className='flex space-x-5'>
                        <div className='flex gap-2 justify-center items-center'>
                            <div className='w-3 h-3 bg-[#244D3F] rounded-full'></div>
                            <div><span>Call</span></div>
                        </div>

                        <div className='flex gap-2 justify-center items-center'>
                            <div className='w-3 h-3 bg-[#7E35E1] rounded-full'></div>
                            <div><span>Text</span></div>
                        </div>

                        <div className='flex gap-2 justify-center items-center'>
                            <div className='w-3 h-3 bg-[#37A163] rounded-full'></div>
                            <div><span>Video</span></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Stats;