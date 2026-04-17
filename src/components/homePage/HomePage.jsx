import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { HashLoader } from 'react-spinners';

const HomePage = () => {

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();

            setFriends(data);
            setLoading(false);

            // setTimeout(() => {
            //     setFriends(data);
            //     setLoading(false);
            // }, 1500);
        };

        fetchData();
    }, []);

    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='text-3xl font-bold mt-10'>Your Friends</h1>

            {loading ? <div className='flex justify-center'><HashLoader color='#244D3F' /></div> :
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    {
                        friends.map((friend) => (

                            <Link to={`/friend/${friend.id}`} key={friend.id}>
                                <div className='mt-5 flex items-center'>

                                    <div className='p-6 bg-white rounded-md shadow-sm text-center w-full space-y-2'>

                                        <div className='flex justify-center items-center'>
                                            <img src={friend.picture} alt="my friends image" className="w-20 h-20 object-cover object-center rounded-full" />
                                        </div>

                                        <h1 className='text-xl font-bold mt-2 text-[#244D3F]'>{friend.name}</h1>
                                        <p className='text-[12px] text-[#64748B]'>{friend.days_since_contact}d ago</p>

                                        <div className='space-y-4'>

                                            <div>
                                                {
                                                    friend.tags.map((tag, index) => (
                                                        <span key={index} className='uppercase font-semibold bg-[#CBFADB] px-3 py-1.5 rounded-full mx-1'>
                                                            {tag}
                                                        </span>
                                                    ))
                                                }
                                            </div>

                                            <div><span className={`font-semibold px-3 py-1.5 rounded-full ${
                                                friend.status === 'Almost Due' ? 'bg-[#EFAD44] text-white' :
                                                friend.status === 'Overdue' ? 'bg-[#EF4444] text-white' :
                                                    friend.status === 'On Track' ? 'bg-[#244D3F] text-white' : ''
                                                }`}>
                                                {friend.status}
                                            </span></div>
                                        </div>


                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>}
        </div>
    );
};

export default HomePage;