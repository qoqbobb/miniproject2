import React from 'react';
import { Container } from '../Nav/Container';
import { Headerstyle,MainHeaderstyle } from '../Nav/Headerstyle';
import '../image.css';


const Main = () => {
  return (
   <Container>
    <Headerstyle>
        <MainHeaderstyle>
        <div className='maintxt'>Hello</div>
        </MainHeaderstyle>
    </Headerstyle>
    </Container>
  )
}

export default Main