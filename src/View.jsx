import Item from "./Blog Item";
import { db } from "./firebase";
import { getDocs, collection, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function View() {

    const [blogs, setBlogs] = useState([]);
    const [remark, setRemark] = useState("");
    const [load, setLoad] = useState(false);

    useEffect(() => {
        showBlogs();
    }, []);

    async function showBlogs() {
        try {
            setLoad(true);

            const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
            const snapshot = await getDocs(q);
            const data = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    title: doc.data().title,
                    content: doc.data().content,
                    time: doc.data().time,
                    date: doc.data().date
                }
            });
            setBlogs(data);

            if (data.length === 0) {
                setRemark("No blogs available!");
            } else {
                setRemark("Here are the available blogs!");
            }
        } catch (err) {
            setRemark(err.message);
        } finally {
            setLoad(false);
        }
    }

    async function deleteBlog(id) {
        await deleteDoc(doc(db, 'blogs', id));
        showBlogs();
    }

    return(
        <div>
            <h1>Here are your blogs!</h1>

            <Link to='/'>Home</Link>
            <br />
            <Link to='/create'>Create blog</Link>

            <div className="screen">
                {load && (
                    <Loading/>
                )}
                {blogs.map(blog => (
                    <Item blog={blog} deleteBlog={deleteBlog} key={blog.id}/>
                ))}

                <p>{remark}</p>
            </div>
        </div>
    )
}

export default View;