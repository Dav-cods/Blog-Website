function Item({blog, deleteBlog}) {
    return(
        <div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>Created on {blog.date} at {blog.time}</p>
            <button onClick={() => {deleteBlog(blog.id)}}>Delete blog</button>
            <hr />
        </div>
    )
}

export default Item;