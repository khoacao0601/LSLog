import React from 'react';
import {useState, useEffect} from 'react';

const Login = () => {

    const api_key = "3c75208d866c53ae123789258ee3d13d";

    const cityName = "Dallas";

    const api_url = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`;

    useEffect(() => {
        async function fetchPostList(){
            try {
                const requestUrl = api_url;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                
                console.log(responseJSON);
            } catch (error) {
                console.log('Failed to Fetch', error);
            } 
        }

        fetchPostList();
    }, [ ]);



    return(
        <div className="login-form w-25 mx-auto">
            <form>
                <h2 className="text-center">Log in</h2>       
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username" required="required" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required="required" />
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