import React, { useCallback, useEffect, useRef } from 'react';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuthProviderHandler from '../../hooks/useAuthProviderHandler';
import auth from '../../utilities/firebase.init';

export default function ResetPassword() {
    const [user, loading, error] = useAuthState(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const location = useLocation();
    let navigate = useNavigate();

    const { signInWithGoogle, setAuthProvider } = useAuthProviderHandler()

    // Form Data
    const userEmail = useRef();
    const onSubmitHandler = useCallback((e) => {
        e.preventDefault();
        const email = userEmail.current?.value
        sendPasswordResetEmail(email)
            .then(() => {
               setTimeout(()=> {
                toast.info(`A reset email sent to ${email}`)
              },2000)
              
            })
            .then(()=>{
                navigate('/signIn')
            })
    }, []);

    // Redirect





    useEffect(() => {
        let from = location.state?.from?.pathname || "/";
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user])




    return (
        <div className='w-96 md:w-4/12 mx-auto mt-16'>
            <div className="text-center">
                <h2 className='text-2xl md:text-4xl text-slate-600 font-semibold'>Reset Password</h2>

            </div>
            <form className="mt-8 space-y-6" onSubmit={onSubmitHandler}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className=" flex flex-col gap-5">

                    <div>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                            placeholder="Email address"
                            ref={userEmail}
                        />
                    </div>


                </div>

                <div>
                    <button
                        type="submit"
                        className="w-36 group relative flex justify-center ml-auto py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    >
                        Reset Password
                    </button>
                </div>
            </form>
            <div className="flex flex-col ">
                <div className="flex gap-3 justify-center items-center">
                    <hr className='w-96 border border-b-0 border-zinc-300' />
                    <p className="mt-2 mb-4 text-center text-sm text-gray-600">
                        Or{' '}
                    </p>
                    <hr className='w-96 border border-b-0 border-zinc-300' />

                </div>

                <button onClick={() => {
                    signInWithGoogle()
                    setAuthProvider('googleSignIn')
                }}
                    className=" flex gap-1 justify-center font-semibold border border-zinc-400 py-2 px-10 shadow-md rounded-md  text-emerald-600 hover:text-emerald-500" >
                    <FcGoogle className='font-bold text-2xl' /><span>Continue with google</span>
                </button>
            </div>

        </div>
    )
}
