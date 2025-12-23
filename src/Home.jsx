import { Link } from "react-router-dom";
import laptop from './Images/Laptop woman.jpg';
import './CSS Files/Home.css';

function Home() {
    return(
        <div className="home">
            <div className="grid-div">
                <div className="intro">
                    <h1>Share Your Ideas <br /> With the World</h1>
                    <p>
                        A simple, personal blogging space to write, publish, <br /> and revisit your thoughts anytime.
                    </p>
                    <div className="link-div">
                        <Link to='/create' className="create-blog">Create a blog</Link>
                        <Link to='/view' className="view-blogs">View blogs</Link>
                    </div>
                </div>
                <img src={laptop} alt="Laptop" className="lap-img" />
            </div>
            <div className="cards">
                <div className="card">
                    <p className="emoji">📝</p>
                    <div className="info">
                        <h3>Write Freely</h3>
                        <p className="explain">Create blogs without <br /> distractions</p>
                    </div>
                </div>
                <div className="card">
                    <p className="emoji">📚</p>
                    <div className="info">
                        <h3>Organize</h3>
                        <p className="explain">Keep all your posts in <br /> one place</p>
                    </div>
                </div>
                <div className="card">
                    <p className="emoji">🔐</p>
                    <div className="info">
                        <h3>Secure</h3>
                        <p className="explain">Keep blogs private <br /> if you want</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;