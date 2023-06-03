import React from 'react';

export  function LoginComponent () {
    return (
        <>
        <h1 className='title'>LOGIN</h1>
        <div className='register-form'>
            <div className='user-side-bar'>
                <h1>Ethio-Chat</h1>
            </div>
            <hr/>
            <div className='user-info'>
                <label>User Name</label>
                <input type='text'></input>
                <label>Password</label>
                <input type='password'></input>
                <h5 href = '#'>Forget Password</h5>
                <button type='submit'>LOGIN</button>
            </div>
        </div>
        </>
    );
};