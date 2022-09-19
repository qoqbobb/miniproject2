import React from 'react'
import { Container } from 'react-bootstrap'
import '../image.css'
import "../Button.css";


const About = () => {
  return (
    <>
    <Container fluid>
    <h1 id='free'>오시는길</h1>
    <div className='image'></div>
 
    <hr/>
   
  
   
   <table className='margin1'>
	<th colSpan={2}>미니프로젝트</th>

	<tr>
	    <td width="25%"><h5>주소</h5></td>
	    <td width="75%"><b>서울 특별시 구로구 경인로 557</b></td>
	</tr>
	<tr>
	    <td><h5>이메일</h5></td>
	    <td><b>rmfjfemtgks@email.com</b></td>
	</tr>
    </table>
    <table>
	<th colSpan={2}>제휴문의</th>

	<tr>
	    
	    <td width="75%"><b>당신의 비지니스에 AI를 더하세요</b></td>
	</tr>
	<tr>
	    
	    <td><button>문의하기</button></td>
	</tr>
    </table>
    </Container>

    </>
  )
}

export default About