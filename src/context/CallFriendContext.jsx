import React, { useState } from 'react';
import { CallFriendContext } from './CallContext';

const CallFriendProvider = ({ children }) => {

     const [callFriends, setCallFriends] = useState([]);

    const data = {
        callFriends,
        setCallFriends,
    };

    return (
        <CallFriendContext.Provider value={data}>
            {children}
        </CallFriendContext.Provider>
    );
};

export default CallFriendProvider;