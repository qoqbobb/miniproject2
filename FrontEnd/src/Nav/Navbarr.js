import React from 'react'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'

const Navbarr = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">홈</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="qna">QnA</Nav.Link>
            <Nav.Link href="about">오시는 길</Nav.Link>
            <NavDropdown title="게시판" id="collasible-nav-dropdown">
              <NavDropdown.Item href="viewpage">자유게시판</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                공지사항
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">질문 게시판</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">LogIn</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              LogOut
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarr