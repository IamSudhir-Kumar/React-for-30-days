import React from 'react'
import "./loginform.css"

const loginform =() => {

    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Password' />

            <div className="login-btn" >Login</div>

            <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>
        </div>
    )
}
export default loginform