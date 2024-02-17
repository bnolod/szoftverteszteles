import {signOut} from 'firebase/auth';
import {auth} from '../../firebase';

export function SignOut() {
    signOut(auth).then(() => {
        console.log("Successfully signed out");
    }).catch((error) => {
        console.log(error);
    });
}