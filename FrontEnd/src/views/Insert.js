import axios from "axios";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "reactstrap";
import "../App.css";
import { Button } from "reactstrap";
import "../Button.css";

const Insert = (props) => {
    const[free, setFree] = useState({
        title:"",
        writer:"",
        content:"",
    });


const changeValue = (e) =>{
    setFree({
        ...free,
        [e.target.name] : e.target.value
    });
}

const submitFree = (e) => {
    e.preventDefault();

    fetch('http://localhost:9008/insert',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json; charset=utf-8',
        },
        body: JSON.stringify(free),
    })
    .then((res)=>{
        if(res.status === 201){
            alert('글 등록 완료');
            return res.json();
        }else{
            return null;
        }
    })
    .then((res) => {
        if(res !== null){
            props.history.push('/viewpage');
        }else{
            alert('글 등록에 실패하셨습니다.');
        }
    });
};

return( 
    <>
    <form onSubmit={submitFree}>
     <h1>"자유게시판"</h1>
     <br/>
     <br/>

    <h3 id="form">제목</h3>
        <input
          
          type="text"
          name="title"
          placeholder="제목을 입력해 주세요"
          onChange={changeValue}
          
          
        />
        
        <br />
        <h3 id="form">작성자</h3>
        <input
        
          type="text"
          name="writer"
          placeholder="작성자"
          onChange={changeValue}
          />
        <br />
        <br/>
        <h3 id="form">내용</h3>
        <textarea
        
          rows="30"
          cols="50"
          name="content"
          
          onChange={changeValue}
        ></textarea>
      <br/>
      <button type="submit" className="w-btn-outline w-btn-indigo-outline">
        글등록
      </button>

      

      </form>
    




  </>

);

};


export default Insert;
   