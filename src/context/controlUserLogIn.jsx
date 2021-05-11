import React, { createContext, useState } from 'react';

export const ControlUserLoginContext = createContext();

const ControlUserLoginContextProvider = ({ children }) => {

    const[userIn, setUserIn] = useState('');

    const setUserInfoIn = (userInfo) => {
        setUserIn(userInfo);
    }

    const userInDataContext = {
        userIn,
        setUserInfoIn
    }

    return(
        <ControlUserLoginContext.Provider value={userInDataContext}>
            {children}
        </ControlUserLoginContext.Provider>
    )

}

export default ControlUserLoginContextProvider;
