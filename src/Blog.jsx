import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { Uploaded } from "./Loading";

function Blog () {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [blogs, setBlogs] = useState([]);
    const [load, setLoad] = useState();

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleContentChange(e) {
        setContent(e.target.value);
    }

    async function addBlog() {
        if(title && content) {
            setLoad(<Loading/>);

            await addDoc(collection(db, 'blogs'), {
                title: title,
                content: content,
                time: new Date().toLocaleTimeString(),
                date: new Date().toLocaleDateString(),
                createdAt: serverTimestamp()
            });

            setLoad(<Uploaded/>);
            setTimeout(() => {
                setLoad();
            }, 2000);

            setTitle("");
            setContent("");
        }
    }

    return(
        <div>
            <h1>Welcome To Blog</h1>
            <input type="text" placeholder="Type a title" onChange={handleTitleChange} value={title}/>
            <br />
            <br />
            <textarea name="content" id="" onChange={handleContentChange} value={content}></textarea>
            <button onClick={addBlog}>Upload</button>

            <div>
                {load}
            </div>

            <br />
            <Link to='/'>Go to Home</Link>
            <br />
            <br />
            <Link to='/view'>View your blogs</Link>
        </div>
    )
}

export default Blog;