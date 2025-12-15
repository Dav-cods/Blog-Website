import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function Navbar() {

    const navigate = useNavigate();

    async function logout() {
        signOut(auth);
        navigate('/');
    }

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/create'>Create Blog</Link></li>
                    <li><Link to='/view'>View blogs</Link></li>
                </ul>

                {auth.currentUser && (
                    <button onClick={logout}>Logout</button>
                )}

                {auth.currentUser && (
                    <span>{auth.currentUser.email}</span>
                )}

                {!auth.currentUser && (
                    <div>
                        <Link to='/signin'>Sign In</Link>
                        <br />
                        <Link to='/signup'>Sign Up</Link>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar;