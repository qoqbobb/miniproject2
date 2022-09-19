import React from 'react';
import '../qna.css';

// import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; 
 import ReactstrapFade from './ReactstrapFade';
 import ReactstrapFade2 from './ReactstrapFade2';
 import ReactstrapFade3 from './ReactstrapFade3';

// 컴포넌트 단위로 element를 return할 때, 하나의 <html> 태그로 전체를 감싸지
// 않으면 에러가 발생합니다. 이때 <Fragments> 태그로 감싸면 불필요한
// <html> 태그를 추가하지 않고 사용할 수 있습니다.
// 이때, Fragments는 약식으로 표현도 가능하며, 약식 표현은
// <>로 시작해서 </>로 종결처리를 하면 됩니다.

function Qna() {
  return (
    <div className='div'>
      
      <h1 className='qna'>Q & A</h1>
      <br/>
      <br/>
        <ReactstrapFade />
      <br/>
      <ReactstrapFade2/>
      <br/>
      <ReactstrapFade3/> 
      <hr/>
      
      
    </div>
    
  );
}

export default Qna;