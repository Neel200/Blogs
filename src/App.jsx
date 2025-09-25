import React, { useContext, useEffect } from "react"
import { AppContext } from "./Context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import TagPage from './Pages/TagPage';
import CategoryPage from './Pages/CategoryPage';
export default function App(){
  const {fetchBlogPosts}=useContext(AppContext);
  const [searchParams,setSearchParams]=useSearchParams();
  const location=useLocation();
  useEffect(()=>{
    const page=searchParams.get("page")??1;
    if (location.pathname.includes("/tag/")){
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);
    }
    else if (location.pathname.includes("/category/")){
      const category=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname, location.search]);
  return(
    <div className="app-container">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blogs/:blogId" element={<BlogPage/>}/>
          <Route path="/tag/:tag" element={<TagPage/>}/>
          <Route path="/category/:category" element={<CategoryPage/>}/>
        </Routes>
      </main>
    </div>
  )
}