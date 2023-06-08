import React from 'react';

export  function HomeComponent () {
    return (
        <>
        <div className='bg-gray-900 h-screen'>
            <div className='p-20'>
                <h1 className='p text-4xl text-white font-bold text-center'>WELCOME! 👋</h1>
            </div>
            <div className='flex'>
                <button className='w-1/3 my-5 ml-40 mr-20 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Go To Register Page</button>
                <button className='w-1/3 my-5 ml-20 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Go To Login Page</button>
            </div>
        </div>
        </>
    );
};