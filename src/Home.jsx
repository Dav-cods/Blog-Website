import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
            <h1>Welcome to the Blog Website</h1>
            <Link to='/create'>Create blog</Link>
            <br />
            <Link to='/view'>View your blogs</Link>
        </div>
    )
}

export default Home;