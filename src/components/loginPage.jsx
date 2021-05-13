import React, {useContext, useState} from 'react';
import {useEffect} from 'react';
import {ControlUsersContext} from '../context/controlUsers';
import {ControlViewsContext} from '../context/controlViews';



const Login = () => {

    const [inputUserName, setInputUserName] = useState('');
    const [userName, setUserName] = useState([]);
    const [userStatus, setUserStatus] = useState('');

    const {getUsersValue, userFilter} = useContext(ControlUsersContext);
    const {viewValueWelcome} = useContext(ControlViewsContext);
  
    //console.log(viewsValueSet);
    

    const api_url = `http://18.222.78.10:8110/uaa/users`;

    useEffect(() => {
            async function fetchPostList(){
                try {
                    const requestUrl = api_url;
                    const response = await fetch(requestUrl);
                    //console.log(response);
                
                    const responseJSON = await response.json();
                    
                    //console.log(responseJSON);
                    getUsersValue(responseJSON);

                    //Clear data to get Username Only
                    let newUsersName = [];
                    for(let i = 0; i < responseJSON.length; i++){
                        newUsersName.push(responseJSON[i].username)
                     }
                     setUserName([...userName, newUsersName]);
                     //console.log(newUsersName);

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
        //console.log(userName);
        for(let i = 0; i < userName[0].length; i++){
            if(userName[0][i] === inputUserName){
                userFilter(userName[0][i]);
                viewValueWelcome('welcome');  
            } else {
                setUserStatus("Username is not available");
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
                <p style={{color:'red'}}>{userStatus}</p>
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