import React from "react";
import Header from "../Components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blog from "../Components/Blog";
import Pagination from "../Components/Pagination";
export default function TagPage(){
    const navigate=useNavigate();
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1);
    return(
        <div>
            <Header/>
            <div className="main-content">
                <div className="page-content-alt">
                    <button className="back-btn" onClick={()=>navigate(-1)}>
                        Back
                    </button>
                    <h2>
                        Blogs Tagged <span>#{tag}</span>
                    </h2>
                    <div className="blogs-container">
                        <Blog/>
                    </div>
                    <Pagination/>
                </div>
            </div>
        </div>
    )
}