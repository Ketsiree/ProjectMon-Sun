import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
//import Form from 'react-bootstrap/Form';
import firebase from 'firebase/app';
import {Button} from 'react-bootstrap/';


const Topbar = () => {

    return (
        <div>

            <Navbar bg="outline-primary" variant="primary">
                <Navbar.Brand href="/Home">Hello</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/* <Nav.Link href="/">Week 1</Nav.Link>
                        <Nav.Link href="/">Week 2</Nav.Link> */}
                        <NavDropdown title="Week 1" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Mon">Monday</NavDropdown.Item>
                            <NavDropdown.Item href="/Tues">Tuesday</NavDropdown.Item>
                            <NavDropdown.Item href="/Wed">Wednesday</NavDropdown.Item>
                            <NavDropdown.Item href="/Thurs">Thursday</NavDropdown.Item>
                            <NavDropdown.Item href="/Fri">Friday</NavDropdown.Item>
                            <NavDropdown.Item href="/Satur">Saturday</NavDropdown.Item>
                            <NavDropdown.Item href="/Sun">Sunday</NavDropdown.Item>
                        </NavDropdown>
                        {/* <NavDropdown title="Week 2" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Monday</NavDropdown.Item>
                            <NavDropdown.Item href="">Tuesday</NavDropdown.Item>
                            <NavDropdown.Item href="">Wednesday</NavDropdown.Item>
                            <NavDropdown.Item href="/Thurs">Thursday</NavDropdown.Item>
                            <NavDropdown.Item href="/Fri">Friday</NavDropdown.Item>
                            <NavDropdown.Item href="/Satur">Saturday</NavDropdown.Item>
                            <NavDropdown.Item href="/Sun">Sunday</NavDropdown.Item>
                            
                        </NavDropdown> */}
                    </Nav>

                    {/* <Form inline> */}
                        <Button variant="secondary">< button onClick={() => firebase.auth().signOut()}>Sign Out</button></Button>
                    {/* </Form> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Topbar;









// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import fire from '../Config/fire';
// import { Nav, Navbar, Button, Form} from 'react-bootstrap'


// const Topbar = () => {

//     const logout = () => {

//         fire.auth().signOut();
//     }

//     return (
//         <div>
//             <Navbar bg="dark" variant="dark">
//                 <Navbar.Brand href="/">หน้าหลัก</Navbar.Brand>
//                 <Nav className="mr-auto">
//                     <Nav.Link href="/orders">รายการ</Nav.Link>
//                     <Nav.Link href="/forminput">สั่งอาหาร</Nav.Link>
//                     <Nav.Link href="/pricing">ยอดขาย</Nav.Link>
//                 </Nav>
//                 <Form inline>
//                     <Button variant="outline-info" onClick={logout}>ออกจากระบบ</Button>
//                 </Form>
//             </Navbar>
//         </div>
//     )
// }

// export default Topbar