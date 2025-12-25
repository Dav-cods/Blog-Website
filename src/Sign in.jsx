import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Link, useNavigate, useLocation } from "react-router-dom";
import './CSS Files/Sign.css';

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
        <div className="signIn-page">
            <div className="sign-card">
                <h2>Sign In</h2>
                <div className="inputs">
                    <input type="email" value={email} placeholder="Email" onChange={handleEmailChange} />
                    <input type="password" value={password} placeholder="Password" onChange={handlePasswordChange} />
                </div>
                <button disabled={loading} onClick={signIn}>
                    {loading ? 'Signing In...' : 'Sign In'}
                </button>
                <p className="message">{message}</p>
                <p className="alternative">Don't have an account? <Link to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    )
}

export default SignIn;