import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header/>
            <div className='absolute top-0 bottom-0 left-0 right-0'>
                <img className='w-100 h-100' src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/a822ccf9-e1b7-4352-92c7-aa9cd34f8931/CA-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg'/>
            </div>
            <form className='p-12 absolute top-40 w-3/12 left-[50%] translate-x-[-50%] bg-black bg-opacity-80 rounded-lg'>
                <h1 className='font-bold text-3xl mx-2 py-4 text-white'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && <input type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700 rounded-lg' />}
                <input type='text' placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700 rounded-lg' />
                <input type='text' placeholder='Password' className='p-2 my-2 w-full bg-gray-700 rounded-lg' />
                <button className='p-3 my-2 w-full bg-red-600 text-white rounded-lg'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='py-4 text-white cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In Now'}</p>
            </form>
        </div>
    )
}

export default Login