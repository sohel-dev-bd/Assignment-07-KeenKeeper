import React, { useContext, useState } from 'react';
import { CallFriendContext } from '../../context/CallContext';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { LuDatabaseBackup } from 'react-icons/lu';



const TimeLineHistory = () => {


    const { callFriends } = useContext(CallFriendContext);
    const [filter, setFilter] = useState('All');
    

    const filterData = filter === 'All' ? callFriends : callFriends.filter((flt) => flt.type === filter);

    const count = filterData.length;

    return (
        <div className='w-10/12 mx-auto py-10 space-y-5'>
            <h1 className='text-5xl font-bold text-[#1F2937]'>Timeline</h1>
            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1 text-[#64748B] w-45 lg:w-85 bg-white shadow-sm flex justify-between">Filter timeline <MdKeyboardArrowDown /></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=> setFilter('All')} className='mt-2 shadow'>All</a></li>
                    <li><a onClick={()=> setFilter('Call')} className='mt-2 shadow'>Call</a></li>
                    <li><a onClick={()=> setFilter('Text')} className='mt-2 shadow'>Text</a></li>
                    <li><a onClick={()=> setFilter('Video')} className='mt-2 shadow'>Video</a></li>
                </ul>
            </div>
            

            {count !== 0 ? <div>
                {
                filterData.map((friend, index) => (
                    <div key={index} className='flex bg-white p-5 rounded-xl gap-5 my-2 shadow-md'>

                        <div>
                            {friend.type === 'Call' && <img src="/images/call.png" alt="Call" />}
                            {friend.type === 'Text' && <img src="/images/text.png" alt="Text" />}
                            {friend.type === 'Video' && <img src="/images/video.png" alt="Video" />}
                        </div>


                        <div>
                            <h1><span className='font-medium text-xl text-[#244D3F]'>{friend.type} </span><span className='text-lg'> with {friend.name}</span></h1>
                            <h1 className='text-[#64748B]'>{friend.time}</h1>
                        </div>
                    </div>
                ))
            }
            </div> : <h1 className='flex items-center justify-center gap-3 py-20 font-medium text-gray-700 text-2xl'>No Data Found <LuDatabaseBackup /></h1>}

        </div>
    );
};

export default TimeLineHistory;