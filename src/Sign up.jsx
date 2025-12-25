import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Link, useNavigate, useLocation } from "react-router-dom";
import './CSS Files/Sign.css';

function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
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

    function handleConfirmChange(e) {
        setConfirm(e.target.value);
    }

    async function signUp () {
        setMessage('');

        if (!email || !password || !confirm) {
            setMessage('All fields are required.');
            setTimeout(() => {
                setMessage('');
            }, 2000)
            return;
        }

        if (password !== confirm) {
            setMessage('Passwords do not match.');
            return;
        }

        if (password.length < 8) {
            setMessage('Password must be at least 8 characters long.');
            return;
        }

        try {
            setLoading(true);
            await createUserWithEmailAndPassword(auth, email, password);
            navigate(redirectTo, { replace: true });
        } catch (err) {
            setMessage(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }

    return(
        <div className="signUp-page">
            <div className="sign-card">
                <h2>Sign Up</h2>
                <div className="inputs">
                    <input type="email" onChange={handleEmailChange} value={email} placeholder="Email" />
                    <input type="password" onChange={handlePasswordChange} value={password} placeholder="Password" />
                    <input type="password" onChange={handleConfirmChange} value={confirm} placeholder="Confirm password" />
                </div>
                <button onClick={signUp} disabled={loading}>
                    {loading ? 'Creating Account...' : 'Create Account'}
                </button>
                <p className="message">{message}</p>
                <p className="alternative">Already have an account? <Link to='/signin'>Sign In</Link></p>
            </div>
        </div>
    )
}

export default SignUp;