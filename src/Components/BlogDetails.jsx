import React from "react";
import { NavLink } from "react-router-dom";
export default function BlogDetails({post}){
    return(
        <div className="blog-post">
            <NavLink to={`/blogs/${post.id}`}>
                <span className="blog-title">{post.title}</span>
            </NavLink>
            <p>
                By <span className="blog-author">{post.author}</span> on{" "}
                <NavLink to={`/category/${post.category?.replace(/-/g," ")}`}>
                    <span className="blog-category">{post.category}</span>
                </NavLink>
            </p>
            <p className="blog-category">Posted on {post.date}</p>
            <p className="blog-content">{post.content}</p>
            <div className="blog-tags">
                {post.tags?.map((tag, index) => (
                    <NavLink key={index} to={`/tag/${tag.replace(/-/g," ")}`}>
                        <span className="blog-tag">{`#${tag}`}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}