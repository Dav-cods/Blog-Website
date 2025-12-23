import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import './CSS Files/Navbar.css';

function Navbar() {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    async function logout() {
        signOut(auth);
        navigate('/');
    }

    function toggle() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="navbar">
            <div className="menu" onClick={toggle}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className={`nav ${isOpen ? 'active' : ''}`}>
                <h2>Blogee</h2>
                <ul className="ul">
                    <li><Link to='/' className="links">Home</Link></li>
                    <li><Link to='/create' className="links">Create Blog</Link></li>
                    <li><Link to='/view' className="links">View blogs</Link></li>
                </ul>

                {auth.currentUser && (
                    <div className="log-div">
                        <button onClick={logout}>Logout</button>
                        <span>{auth.currentUser.email}✅</span>
                    </div>
                )}

                {!auth.currentUser && (
                    <div className="sign-div">
                        <Link to='/signin' className="sign">Sign In</Link>
                        <Link to='/signup' className="sign">Sign Up</Link>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar;