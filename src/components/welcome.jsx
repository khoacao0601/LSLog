import React, {useContext} from 'react';
import {ControlUsersContext} from '../context/controlUsers';


const Welcome = () => {

    const {users} = useContext(ControlUsersContext);
    console.log(users);

    return (
        <div className="w-50 mx-auto">
            <h1>Welcome to LSL main page</h1>
        </div>
    )
}

export default Welcome;
