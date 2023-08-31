import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = () => {
        const msg = checkValidData(email.current.value, password.current.value);
        setErrorMessage(msg);

        if(msg !== null){
            return;
        }

        if(!isSignInForm){
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then(userCredential => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: 'https://occ-0-1065-1722.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbXvifVk-dpWz0L9Nl7qJCepsABdkwIGOiPUHB--bD6i2qJflBo6_lSFngub0lqyax76Qmul63g22GIXcviTnyxFT1qsjik.png?r=832'
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                        navigate('/browse');
                    }).catch(err => {
                        setErrorMessage(err.message);
                    });
                })
                .catch(err => {
                    const errorCode = err.code;
                    const errorMessage = err.message;
                    setErrorMessage(errorCode + '-' + errorMessage);
                });
        }
        else{
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then(userCredential => {
                    const user = userCredential.user;
                    navigate('/browse');
                })
                .catch(err => {
                    const errorCode = err.code;
                    const errorMessage = err.message;
                    setErrorMessage(errorCode + '-' + errorMessage);
                });
        }
    };

    return (
        <div>
            <Header/>
            <div className='absolute top-0 bottom-0 left-0 right-0'>
                <img className='w-100 h-100' src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/a822ccf9-e1b7-4352-92c7-aa9cd34f8931/CA-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg'/>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='p-12 absolute top-40 w-3/12 left-[50%] translate-x-[-50%] bg-black bg-opacity-80 rounded-lg text-white'>
                <h1 className='font-bold text-3xl mx-2 py-4 text-white'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700 rounded-lg' />}
                <input ref={email} type='text' placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700 rounded-lg' />
                <input ref={password} type='password' placeholder='Password' className='p-2 my-2 w-full bg-gray-700 rounded-lg' />
                <p className='text-red-600 text-lg p-2'>{errorMessage}</p>
                <button className='p-3 my-2 w-full bg-red-600 text-white rounded-lg' onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='py-4 text-white cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In Now'}</p>
            </form>
        </div>
    )
}

export default Login