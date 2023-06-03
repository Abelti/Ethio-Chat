import React from 'react';

export  function RegisterComponent () {
    return (
        <>
        <h1>Register</h1>
        <div className='register-form'>
            <div className='user-side-bar'>
                <img className='user-avatar' alt='userPhoto'></img>
                <h1>Ethio-Chat</h1>
                <button className='login-btn'>Login</button>
            </div>
            <hr/>
            <div className='user-info'>
                <label>First Name</label>
                <input type='text'></input>
                <label>Last Name</label>
                <input type='text'></input>
                <label>User Name</label>
                <input type='text'></input>
                <label>Phone Number</label>
                <input type='number'></input>
                <label>Email</label>
                <input type='text'></input>
                <label>Password</label>
                <input type='password'></input>
                <label>Confirm Password</label>
                <input type='password'></input>
                <button type='submit'>REGISTER</button>
            </div>
        </div>
        </>
    );
};