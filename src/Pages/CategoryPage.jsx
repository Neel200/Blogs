import React from "react";
import Header from "../Components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blog from "../Components/Blog";
import Pagination from "../Components/Pagination";
export default function CategoryPage(){
    const navigate=useNavigate();
    const location=useLocation();
    const category=location.pathname.split("/").at(-1);
    return(
        <div>
            <Header/>
            <div className="main-content">
                <div className="page-content-alt">
                    <button className="back-btn" onClick={()=>navigate(-1)}>
                        Back
                    </button>
                    <h2>
                        Blogs on <span>{category}</span>
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