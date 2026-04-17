import React, { useContext, useEffect, useState } from 'react';
import { HiBellSnooze } from 'react-icons/hi2';
import { LuArchive, LuVideo } from 'react-icons/lu';
import { RiDeleteBin6Line, RiMessage2Line } from 'react-icons/ri';
import { TbPhoneCall } from 'react-icons/tb';
import { useParams } from 'react-router';
import { HashLoader } from 'react-spinners';
import { CallFriendContext } from '../../context/CallContext';
import { toast } from 'react-toastify';

const FriendDetail = () => {
    const { id } = useParams();

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();
            setFriends(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    const expectFriend = friends.find((frnd) => String(frnd.id) === id);


    const { callFriends, setCallFriends } = useContext(CallFriendContext);

    const handleCallFriend = () => {
        const currentTime = new Date().toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
        setCallFriends([...callFriends, { ...expectFriend, type: 'Call', time: currentTime }]);
        toast.success(`Call to ${expectFriend.name}`);
    };
    const handleTextFriend = () => {
        const currentTime = new Date().toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
        setCallFriends([...callFriends, { ...expectFriend, type: 'Text', time: currentTime }]);
        toast.success(`Message sent to ${expectFriend.name}`);

    };
    const handleVideoFriend = () => {
        const currentTime = new Date().toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
        setCallFriends([...callFriends, { ...expectFriend, type: 'Video', time: currentTime }]);
        toast.success(`Video call with ${expectFriend.name}`);

    };


    return (
        <>
            {loading ? <div className='flex justify-center items-center min-h-50'><HashLoader color='#244D3F' /></div> :
                expectFriend && (
                    <div className='w-10/12 mx-auto my-20'>

                        <div className='flex flex-col lg:flex-row gap-5 rounded-md'>

                            <div className='flex-1'>
                                <div className='bg-white shadow-sm rounded-md p-6 space-y-2 text-center'>
                                    <div className='flex justify-center items-center'>
                                        <img src={expectFriend.picture} alt="my friends image" className="w-20 h-20 object-cover object-center rounded-full" />
                                    </div>
                                    <h1 className=' text-xl font-bold mt-2 text-[#244D3F] text-center'>{expectFriend.name}</h1>

                                    <div className='space-y-4'>
                                        <div className='text-center'><span className={`font-semibold px-3 py-1.5 rounded-full  ${expectFriend.status === 'Almost Due' ? 'bg-[#EFAD44] text-white' :
                                            expectFriend.status === 'Overdue' ? 'bg-[#EF4444] text-white' :
                                                expectFriend.status === 'On Track' ? 'bg-[#244D3F] text-white' : ''
                                            }`}>
                                            {expectFriend.status}
                                        </span></div>
                                        <div className='text-center'>
                                            {
                                                expectFriend.tags.map((tag, index) => (
                                                    <span key={index} className='uppercase font-semibold bg-[#CBFADB] px-3 py-1.5 rounded-full mx-1'>
                                                        {tag}
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </div>

                                    <p className='font-medium italic text-[#64748B]'>"{expectFriend.bio}"</p>
                                    <p className='text-[#64748B]'><small>Email: {expectFriend.email}</small></p>
                                </div>

                                <div className='space-y-2 mt-2'>
                                    <div className='cursor-pointer active:scale-95 transition-all shadow-sm rounded-md font-medium py-3 text-center bg-white'><p className='flex justify-center items-center gap-3'><HiBellSnooze /> Snooze 2 weeks</p></div>
                                    <div className='cursor-pointer active:scale-95 transition-all shadow-sm font-medium rounded-md py-3 text-center  bg-white'><p className='flex justify-center items-center gap-3'><LuArchive /> Archive</p></div>
                                    <div className='cursor-pointer active:scale-95 transition-all shadow-sm font-medium rounded-md py-3 text-center bg-white text-red-500'><p className='flex justify-center items-center gap-3'><RiDeleteBin6Line /> Delete
                                    </p></div>
                                </div>

                            </div>



                            <div className='text-center space-y-1 flex-2 rounded-md'>
                                <div className='grid lg:grid-cols-3 gap-5'>
                                    <div className='py-8 px-3.5 bg-white rounded-md space-y-4'>
                                        <h1 className='text-[#244D3F] font-semibold text-3xl'>{expectFriend.days_since_contact}</h1>
                                        <p className='text-[18px] text-[#64748B]'>Days Since Contact</p>
                                    </div>

                                    <div className='py-8 px-3.5 bg-white rounded-md space-y-4'>
                                        <h1 className='text-[#244D3F] font-semibold text-3xl'>{expectFriend.goal}</h1>
                                        <p className='text-[18px] text-[#64748B]'>Goal (Days)</p>
                                    </div>

                                    <div className='py-8 px-3.5 bg-white rounded-md space-y-4'>
                                        <h1 className='text-[#244D3F] font-semibold text-2xl'>
                                            {new Date(expectFriend.next_due_date).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </h1>
                                        <p className='text-[18px] text-[#64748B]'>Next Due</p>
                                    </div>

                                </div>

                                <div className='flex justify-between bg-white p-6 mt-4 rounded-md'>
                                    <div className='space-y-4'>
                                        <h1 className='text-xl font-medium text-[#244D3F] text-start'>Relationship Goal</h1>
                                        <h1 className='text-lg font-semibold text-[#64748B]'>Connect every <span className='text-[#1F2937] text-lg font-bold'>{expectFriend.days_since_contact} Days</span></h1>
                                    </div>
                                    <div>
                                        <button className='btn text-sm font-medium'>Edit</button>
                                    </div>
                                </div>

                                <div className='bg-white p-6 mt-4 rounded-md'>
                                    <h1 className='text-xl font-medium text-[#244D3F]'>Quick Check-In</h1>
                                    <div className='grid lg:grid-cols-3 gap-5 mt-5'>
                                        <div onClick={handleCallFriend} className='p-5 bg-[#F8FAFC] rounded-md cursor-pointer flex flex-col items-center justify-center text-center space-y-3 transition-all active:scale-95'>
                                            <TbPhoneCall />
                                            <h1>Call</h1>
                                        </div>

                                        <div onClick={handleTextFriend} className='p-5 bg-[#F8FAFC] rounded-md cursor-pointer flex flex-col items-center justify-center text-center space-y-3 transition-all active:scale-95'>
                                            <RiMessage2Line />
                                            <h1>Text</h1>
                                        </div>

                                        <div onClick={handleVideoFriend} className='p-5 bg-[#F8FAFC] rounded-md cursor-pointer flex flex-col items-center justify-center text-center space-y-3 active:scale-95 transition-all'>
                                            <LuVideo />
                                            <h1>Video</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default FriendDetail;