import React, {useContext, useState, useEffect} from 'react';
import {ControlUsersContext} from '../context/controlUsers';
import {ControlUserLoginContext} from '../context/controlUserLogIn';


const Welcome = () => {

    const[userInfo, setUserInfo] = useState({});

    const {users} = useContext(ControlUsersContext);
    const {userIn} = useContext(ControlUserLoginContext);
    console.log(userIn);
    console.log(users);

    useEffect(() => {
        function setInfo(){
        for(let i = 0; i < users.length; i++){
            if(users[i].username === userIn){
                setUserInfo(users[i]);
                 }
                }
            }
            setInfo();
        }
    )

    

    return (
        <div className="w-50 mx-auto">
            <h1>Welcome to LSL main page</h1>
            <h2>Hello {userIn}</h2>
            pKey: {userInfo.pKey}
        </div>
    )
}

export default Welcome;
