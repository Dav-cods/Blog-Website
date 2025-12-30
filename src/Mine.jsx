import Item from "./Blog Item";
import { db } from "./firebase";
import { auth } from "./firebase";
import { getDocs, collection, deleteDoc, doc, query, orderBy, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import './CSS Files/View.css';

function Mine() {

    const [blogs, setBlogs] = useState([]);
    const [remark, setRemark] = useState("");
    const [load, setLoad] = useState(false);

    useEffect(() => {
        showBlogs();
    }, []);

    async function showBlogs() {
        if(!auth.currentUser) {
            setRemark("You need to be signed in to view your blogs.");
            return;
        }
        
        try {
            setLoad(true);

            const q = query(collection(db, 'blogs'), where('userId', '==', auth.currentUser.uid), orderBy('createdAt', 'desc'));
            const snapshot = await getDocs(q);
            const data = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    title: doc.data().title,
                    content: doc.data().content,
                    time: doc.data().time,
                    date: doc.data().date,
                    userId: doc.data().userId
                }
            });
            setBlogs(data);

            if (data.length === 0) {
                setRemark("You haven't written any blogs yet!");
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
        <div className="view-page">
            <h1>Here are <i>your</i> blogs!</h1>

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

export default Mine;