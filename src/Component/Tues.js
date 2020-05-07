import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card,CardImg, CardTitle, CardText,CardImgOverlay } from 'reactstrap';
import './Tues.css';


const Tues = () => {
    return (
        <div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
            </style>
            <div className="myStyleT">
                <br />
            <h1>Tuesday Schedule</h1>
            <br />
            <br />
            </div>
            <br />
            <br />
            <br />

            <div className="myVi">
            <br />

            <h1>ท่ากายภาพวันนี้</h1>
            <br />
            <h2>ท่าที่ 4 งอ-เหยียดข้อศอก</h2>
            <br />
            </div>

            <div className="myVi2">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/cvVBeAg8imE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-danger"><h5>วางแขนของผู้ป่วยแนบลำตัว แล้วหงายฝ่ามือขึ้น</h5>
            <h5>งอข้อศอกขึ้นจนมือแตะไหล่ผู้ป่วย แล้วจึงเหยียดออกช้าๆ</h5>
            </span>

            <br />
            </div>

            <br />
            <br />
            
            <div className="myVi">
            <h1>------------------------------------------------------------</h1>
            <br />
            <br />
            <h2>ท่าที่ 5 กระดกข้อมือขึ้น-ลง/ซ้าย-ขวา</h2>
            <br />
            </div>

            <div className="myVi2">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/G0vZgvna0OI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-danger"><h5>จับบริเวณข้อมือของผู้ป่วยเเล้วกระดกมือขึ้น-ลง 10 ครั้ง</h5>
            <h5>เเล้วจึงจับมือบิดไปทางซ้าย-ขวา 10 ครั้ง</h5>
            </span>

            <br />
            </div>

            <br />
            <br />
 
            <div>
            <Card className="li2">
            <CardImg style={{ width:1900,height:270}} src="https://wallpaperaccess.com/full/277719.jpg" alt="Card image" />
                <CardImgOverlay>
                <CardTitle><h1>**ทำ 3 เซต เซตละ 10 ครั้ง**</h1></CardTitle>
                    <CardText>
                        <h2>หรือทำจนกว่าจะเหนื่อย</h2>
                    </CardText>
                    <CardText>
                        <h2>Keep Practicing</h2>
                    </CardText>
                </CardImgOverlay>
            </Card>

            </div>
        </div>
    );
}

export default Tues;