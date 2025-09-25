import React, { useContext } from "react";
import{ AppContext } from '../Context/AppContext';
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";
export default function Blog(){
    const {posts,loading}=useContext(AppContext);
    return(
        <div className="blogs-container">
            {
                loading?(<Spinner/>):
                (posts.length===0?
                    (<div>
                        <p>No Post Found</p>
                    </div>):
                    (posts.map((post)=>(
                        <BlogDetails key={post.id} post={post}/>
                    )))
                )
            }
        </div>
    );
};