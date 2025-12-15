import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Link, useNavigate, useLocation } from "react-router-dom";

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const redirectTo = location.state?.from || '/create';

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    async function signIn() {
        if(!email || !password) {
            setMessage('Please fill all fields properly');
            setTimeout(() => {
                setMessage('');
            }, 3000)
            return;
        }

        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            navigate(redirectTo, {replace: true});
        } catch(err) {
            setMessage(err.message);
            setTimeout(() => {
                setMessage('');
            }, 3000)
        } finally {
            setLoading(false);
        }
    }

    return(
        <div>
            <h2>Sign In</h2>
            <input type="email" value={email} placeholder="Email" onChange={handleEmailChange} />
            <input type="password" value={password} placeholder="Password" onChange={handlePasswordChange} />
            <button disabled={loading} onClick={signIn}>
                {loading ? 'Signing In...' : 'Sign In'}
            </button>
            <p>{message}</p>
            <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
        </div>
    )
}

export default SignIn;