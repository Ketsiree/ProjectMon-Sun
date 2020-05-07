import React from 'react';
import './Home.css';
import {Media} from 'react-bootstrap';
import { Card,CardImg, CardBody, CardTitle, CardText,Button } from 'reactstrap';

const Home = () => {
    
    
    return (
        <div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');
            </style>
    <div className="h">
    <br />
    <h1>Planning for Physical Therapy </h1>
    <br />
    <h3>อุปกรณ์ช่วยเหลือการกายภาพสำหรับผู้ป่วยติดเดียง</h3>
        </div>
        
        <Media>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
        </style>
        </Media>

        <div className="Book1">
        <div align="center"><h1>Week 1-2</h1></div>
        <br />
        <br />
        </div>

        <div className="myS">

        <Card style={{ margin: 20, padding: 20,backgroundColor:"#ffff88" }}>
        <CardImg top width="100%" src="https://img.freepik.com/free-vector/good-morning_52490-24.jpg?size=338&ext=jpg" style={{  width: 405, height: 250}} />
            <CardBody>
                <CardTitle><h4>Monday</h4></CardTitle>
                <CardText>Planning</CardText>
            </CardBody>
            <Button variant="primary" href="/Mon">Start</Button>
        </Card>

        <Card style={{ margin: 20, padding: 20,backgroundColor:"#ffd6da" }}>
        <CardImg top width="100%" src="https://static.wixstatic.com/media/3b769b_6cecd1979e3c4acd8cb87d71c404ef28~mv2.jpg" style={{  width: 405, height: 250 }} />
            <CardBody>
                <CardTitle><h4>Tuesday</h4></CardTitle>
                <CardText>Planning</CardText>
            </CardBody>
            <Button variant="primary" href="/Tues">Start</Button>
        </Card>
        </div>
        
        <div className="myS">
    <Card style={{ margin: 20, padding: 20,backgroundColor:"#bcf8cf" }}>
        <CardImg top width="100%" src="https://3.bp.blogspot.com/--1n5nF1UJ4E/W3vOHljKKcI/AAAAAAAAXM8/Ywbfl9Wdm0sVQQ98W9WdRn6Nco8b9Hw-wCLcBGAs/s1600/IMG_8650.PNG" style={{  width: 405, height: 250}} />
            <CardBody>
                <CardTitle><h4>Wednesday</h4></CardTitle>
                <CardText>Planning</CardText>
            </CardBody>
            <Button variant="primary" href="/Wed">Start</Button>
        </Card>

        <Card style={{ margin: 20, padding: 20,backgroundColor:"#ffb384" }}>
        <CardImg top width="100%" src="https://www.thelocalvoice.net/oxford/wp-content/uploads/2020/03/tuesday-calligraphy-1.jpg" style={{  width: 405, height: 250}} />
            <CardBody>
                <CardTitle><h4>Thursday</h4></CardTitle>
                <CardText>Planning</CardText>
            </CardBody>
            <Button variant="primary" href="/Thurs">Start</Button>
        </Card>

        <Card style={{ margin: 20, padding: 20,backgroundColor:"#b6e3e9" }}>
        <CardImg top width="100%" src="https://i.pinimg.com/736x/48/4c/95/484c95a1a924c71927b65e71ce1cc421.jpg" style={{  width: 405, height: 250 }} />
            <CardBody>
                <CardTitle><h4>Friday</h4></CardTitle>
                <CardText>Planning</CardText>
            </CardBody>
            <Button variant="primary" href="/Fri">Start</Button>
        </Card>
        </div>

        <div className="myS1">
        <Card style={{ margin: 20, padding: 20,backgroundColor:"#cdb9d6" }}>
        <CardImg top width="100%" src="https://i.pinimg.com/originals/5e/a9/51/5ea95188dcc6e36c2128314b335178d0.jpg" style={{  width: 405, height: 250}} />
            <CardBody>
                <CardTitle><h4>Saturday</h4></CardTitle>
                <CardText>Planning</CardText>
            </CardBody>
            <Button variant="primary" href="/Satur">Start</Button>
        </Card>

        <Card style={{ margin: 20, padding: 20,backgroundColor:"#f7af9f" }}>
        <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-JtaFL6ODxu7MRWWZnZ0EaexJch9atzjF2X8y9A10TvoBHFB-&usqp=CAU" style={{  width: 405, height: 250}} />
            <CardBody>
                <CardTitle><h4>Sunday</h4></CardTitle>
                <CardText>Planning</CardText>
            </CardBody>
            <Button variant="primary" href="/Sun">Start</Button>
        </Card>
        </div>
    </div>
            
    );
}
    

export default Home;



