import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "reactstrap";
import "../App.css";
import { Button } from "reactstrap";
import "../Button.css";

const View = (props) => {
    console.log('view',props);
    const id = props.match.params.id;

    const[free, setFree] = useState({
        id:'',
        title:'',
        writer:'',
        content:'',
    });

    useEffect(()=>{
        fetch('http://localhost:9008/view/'+id)
        .then((res) => res.json())
        .then((res)=>{
            setFree(res);
        });
    },[]);

    const deleteFree = () => {
        fetch('http://localhost:9008/delete/'+id,{
            method: 'DELETE',
        })
        .then((res) => res.text())
        .then((res) =>{
            if (res === 'ok'){
                alert('삭제성공')
                props.history.push('/');
            }else{
                alert('삭제성공')
                props.history.push('/');
            }
        });
    };

    const updateFree = () =>{
        props.history.push('/update/' + id);
    };

    return(
        <div>
            
            <h1>자유게시판</h1>
            <br/>
                {/* <table>
                    <tr>
                    <td>작성자</td>
                    <td>{free.writer}</td>
                    </tr>
               
                    <tr>
                    <td>제목</td>
                    <td>{free.title}</td>
                    </tr>
                
                    <tr>
                    <td>내용</td>
                    <td>{free.content}</td>
                    </tr>
                </table> */}
                
                {/* <h3>{free.writer}</h3>
                <h3>{free.title}</h3>
                <h3>{free.content}</h3> */}

<h3 id="form">제목</h3>
        <input
          className="inputField"
          type="text"
          name="title"
          value={free.title}
          readOnly
        />
        
        <br />
        <h3 id="form">작성자</h3>
        <input
        className="inputField"
          type="text"
          name="writer"
          value={free.writer}
          readOnly
          />
        <br />
        <h3 id="form">내용</h3>
        <textarea
        className="inputField"
          rows="30"
          cols="50"
          name="content"
          value={free.content}
          readOnly
        ></textarea>
      <br/>






                <button onClick={updateFree} className="w-btn-outline w-btn-green-outline">
                    수정
                </button>

            {'   '}

                <button onClick={deleteFree} className="w-btn-outline w-btn-green2-outline">
                    삭제
                </button>
        </div>







    );


};

export default View;