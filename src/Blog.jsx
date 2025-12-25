import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { Uploaded } from "./Loading";
import './CSS Files/Create.css';

function Blog () {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [blogs, setBlogs] = useState([]);
    const [load, setLoad] = useState(false);
    const [success, setSuccess] = useState(false);

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleContentChange(e) {
        setContent(e.target.value);
    }

    async function addBlog() {
        try {
            if(title && content) {
                setLoad(true);

                await addDoc(collection(db, 'blogs'), {
                    title: title,
                    content: content,
                    time: new Date().toLocaleTimeString(),
                    date: new Date().toLocaleDateString(),
                    createdAt: serverTimestamp()
                });

                setLoad(false);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 2000)

                setTitle("");
                setContent("");
            }
        } catch (err) {
            console.error(err);
        }
    }

    return(
        <div className="create-page">
            <div className="create-card">
                <h1>Create A Blog</h1>
                <input type="text" placeholder="Type a title" onChange={handleTitleChange} value={title}/>
                <textarea name="content" id="" onChange={handleContentChange} value={content} placeholder="Write your content here"></textarea>
                <button onClick={addBlog}>Upload</button>

                <div className="status">
                    {load && (
                        <Loading/>
                    )}
                    {success && (
                        <Uploaded/>
                    )}
                </div>

                <div className="links">
                    <Link to='/' className="home">Go to Home</Link>
                    <Link to='/view' className="view">View your blogs</Link>
                </div>
            </div>
        </div>
    )
}

export default Blog;