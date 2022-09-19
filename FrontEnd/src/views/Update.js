import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "reactstrap";
import "../App.css";
import { Button } from "reactstrap";


const Update = (props) =>{
    const id = props.match.params.id;

    const[free, setFree] = useState({
        title:'',
        writer:'',
        content:'',
    });

    useEffect(() =>{
        fetch('http://localhost:9008/view/'+id)
        .then((res) => res.json())
        .then((res) =>{
            setFree(res);
        });
    }, []);

    const changeValue = (e) =>{
        setFree({
            ...free,
            [e.target.name]: e.target.value,
        });
    };

    const submitFree = (e) =>{
        e.preventDefault();

        fetch('http://localhost:9008/update/'+id,{
            method:'PUT',
            headers:{
                'Content-Type' : 'application/json; charset=utf-8',
            },
            body: JSON.stringify(free),
        })
        .then((res) => {
            if(res.status === 200){
                alert('글이 수정되었습니다.')
                return res.json();
            }else{
                return null;
            }
        })
        .then((res)=>{
            if(res !== null){
                props.history.push('/view/'+id);
            }else{
                alert('글 수정에 실패하였습니다.')
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
          className="inputField"
          type="text"
          name="title"
          value={free.title}
          onChange={changeValue}
          
          
        />
        
        <br />
        <h3 id="form">작성자</h3>
        <input
        className="inputField"
          type="text"
          name="writer"
          value={free.writer}
          onChange={changeValue}
          />
        <br />
        <h3 id="form">내용</h3>
        <textarea
        className="inputField"
          rows="30"
          cols="50"
          name="content"
          value={free.content}
          onChange={changeValue}
        ></textarea>
      <br/>
      
      <button type="submit" className="w-btn-outline w-btn-indigo-outline">
        글 수정
      </button>




        </form>

        </>
    )




}

export default Update;