import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../Components/Header";
import BlogDetails from "../Components/BlogDetails";
export default function BlogPage(){
    const [blog,setBlog]=useState(null);
    const [relatedblogs,setRelatedBlogs]=useState([]);
    const location=useLocation();
    const navigate=useNavigate();
    const {loading,setLoading}=useContext(AppContext);
    //const blogId=location.pathname.split("/").at(-1)
    const { blogId }=useParams();
    async function fetchRelatedBlogs(){
        setLoading(true);
        let url=`${baseUrl}get-blog?blogId=${blogId}`;
        try{
            const res=await fetch(url);
            const data=await res.json();
            setBlog(data);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log(error);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }
    useEffect(()=>{
        if (blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])
    return(
        <div>
            <Header/>
            <div className="main-content">
                <div className="page-content">
                    <button className="back-btn" onClick={()=>navigate(-1)}>
                        Back
                    </button>
                </div>
                {
                    loading?
                    (<div>
                        <p>Loading</p>
                    </div>):
                    (blog?
                        (<div>
                            <h2>Related Blogs</h2>
                            {
                                relatedblogs.map((post)=>(
                                    <div key={post.id}>
                                        <BlogDetails post={post}/>
                                    </div>
                                ))
                            }
                        </div>):
                        (<div>
                            <p>No Blog found</p>
                        </div>)
                    )
                }
            </div>
        </div>
    )
}