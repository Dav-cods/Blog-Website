import './CSS Files/Blog Item.css';
import { auth } from './firebase';

function Item({blog, deleteBlog}) {
    return(
        <div className="Blog">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>User Email: {blog.userEmail}</p>
            <p>Created on {blog.date} at {blog.time}</p>
            {auth.currentUser && auth.currentUser.uid === blog.userId && (
                <button onClick={() => {deleteBlog(blog.id)}}>Delete blog</button>
            )}
            <hr />
        </div>
    )
}

export default Item;