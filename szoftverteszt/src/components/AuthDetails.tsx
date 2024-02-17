import {useEffect, useState} from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { User } from 'firebase/auth';

export default function AuthDetails() {
    const [authUser, setAuthUser] = useState<User | null>(null);
    useEffect(() => {
        const listener = onAuthStateChanged(auth,(user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
    }, [])
    return (
        <div>
            {authUser ? <p>{`Signed in as ${authUser.email}`}</p> : <p>Logged out</p>}
        </div>
    )
    }

