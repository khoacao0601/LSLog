import React from 'react';

const Login = () => {
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