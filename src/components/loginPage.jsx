import React, {useContext, useState} from 'react';
import {useEffect} from 'react';
import {ControlUsersContext} from '../context/controlUsers';
import {ControlViewsContext} from '../context/controlViews';
import {ControlUserLoginContext} from '../context/controlUserLogIn';


const Login = () => {

    const [inputUserName, setInputUserName] = useState('');
    const [userName, setUserName] = useState([]);

    const {getUsersValue} = useContext(ControlUsersContext);
    const {viewValueWelcome} = useContext(ControlViewsContext);
    const {setUserInfoIn} = useContext(ControlUserLoginContext);
    //console.log(viewsValueSet);
    

    const api_url = `http://18.188.15.76:8110/uaa/users`;

    useEffect(() => {
            async function fetchPostList(){
                try {
                    const requestUrl = api_url;
                    const response = await fetch(requestUrl);
                    const responseJSON = await response.json();
                    
                    //console.log(responseJSON);
                    getUsersValue(responseJSON);

                    //Clear data to get Username Only
                    let newUsersName = [];
                    for(let i = 0; i < responseJSON.length; i++){
                        newUsersName.push(responseJSON[i].username)
                     }
                     setUserName([...userName, newUsersName]);
                     console.log(newUsersName);

                } catch (error) {
                    console.log('Failed to Fetch', error);
                } 
            }
            fetchPostList();
        
    }, []);

    const getInputUserName = (event) => {
        setInputUserName(event.target.value);
    }   

    const checkUserName = (event) => {
        //debugger;
        event.preventDefault();
        console.log(userName);
        for(let i = 0; i < userName[0].length; i++){
            if(userName[0][i] === inputUserName){
                setUserInfoIn(userName[0][i]);
                viewValueWelcome('welcome');  
            } 
        }
    }

    return(
        <div className="login-form w-25 mx-auto">
            <form onSubmit={checkUserName}>
                <h2 className="text-center">Log in</h2>       
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username" required="required" 
                    value={inputUserName}
                    onChange={getInputUserName}
                    />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Log in</button>
                </div>
                <div className="clearFix">
                    <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
                    <a href="forgotPass" className="float-right">Forgot Password?</a>
                </div>        
            </form>
            <p className="text-center"><a href="createAcc">Create an Account</a></p>
        </div>
    )
}

export default Login;