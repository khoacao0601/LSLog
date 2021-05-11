import React, { createContext, useState } from 'react';


export const ControlUsersContext = createContext();

const ControlUsersContextProvider = ({ children }) => {

    const [users, setUsers] = useState({});


    const getUsersValue = (value) => {
        //console.log(value);
        setUsers(value);
        getUsersName(value);
    }

    const getUsersName = (users) => {
        //debugger;
        //console.log(users);
    }

    const usersDataContext = {
        users,
        getUsersValue
    }

    

    //Return Provider
    return(
        <ControlUsersContext.Provider value={usersDataContext}>
            {children}
        </ControlUsersContext.Provider>
    )
}

export default ControlUsersContextProvider;

