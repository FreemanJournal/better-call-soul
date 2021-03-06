import { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../utilities/firebase.init';

export default function useAuthProviderHandler() {
    const [errorMessage, setErrorMessage] = useState()
    const [authProvider,setAuthProvider] = useState()
    const [authLoading,setAuthLoading] = useState(false);

    const [user, loading, error] = useAuthState(auth);
    const [signInWithGoogle, , googleSignInLoading, googleSignInError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, , signUpLoading, signUpError] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
    const [signInWithEmailAndPassword, , signInLoading, signInError] = useSignInWithEmailAndPassword(auth);

    const messageHandler = (error) =>{
        const userMessage = error?.message
        switch (userMessage) {
            case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
                toast.error('Password should be at least 6 characters long.')
                break;
            case 'Firebase: Error (auth/email-already-in-use).':
                toast.error('This email is used once.')
                break;
            case 'No user is logged in':
                toast.error('This email is used once.')
                break;
            case 'Firebase: Error (auth/wrong-password).':
                toast.error('Oops,looks like password is incorrect.')
                break;
            case 'Firebase: Error (auth/user-not-found).':
                toast.error('Please give valid account info.')
                break;
            case 'Firebase: Error (auth/operation-not-allowed)':
                toast.error('Please consider another signIn/signUp option.')
                break;
            default:
                toast.error(userMessage)
                break;
        }
    }

    useEffect(() => {
        switch (authProvider) {
            case 'signUp':
                console.log('signUpError',signUpError);
                messageHandler(signUpError)
                break;
            case 'signIn':
                messageHandler(signInError)
                break;
            case 'updating':
                messageHandler(updatingError)
                break;
            case 'verifying':
                toast.info(`A verification email sent to ${user?.email}`)
                break;
            case 'googleSignIn':
                messageHandler(googleSignInError)
                break;
            default:
                messageHandler('')
        }
    },[signInError, updatingError,signUpError,authProvider,googleSignInError,user])

   


    return {createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,signInWithGoogle,errorMessage,authLoading,setAuthProvider}
}
