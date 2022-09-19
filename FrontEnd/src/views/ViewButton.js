import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Images from '../components/boardpagination';
import "../Button.css";


const ViewButton = () => {
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    const fetchPosts = async() =>{
      setLoading(true);
      const res = await axios.get('http://localhost:9008/findAll');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  },[]);


  return (
    <>
    <hr/>
    <hr/>                   
      <h1 id="free">"자유게시판"</h1>
      <Link to="/insert">
        <button className='w-btn-outline w-btn-gray-outline' >글쓰기</button>
      </Link>

      <div className='list'>
      <Images data={posts} />
      </div>
    
    </>
  );
};

export default ViewButton;