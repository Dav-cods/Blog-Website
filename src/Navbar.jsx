import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/create'>Create Blog</Link></li>
                    <li><Link to='/view'>View your blogs</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;