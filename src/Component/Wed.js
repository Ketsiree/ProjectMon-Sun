import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card,CardImg, CardTitle, CardText,CardImgOverlay } from 'reactstrap';
import './Wed.css';


const Wed = () => {
    return (
        <div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
            </style>
            <div className="myStyleW">
                <br />
            <h1>Wednesday Schedule</h1>
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
            <h2>ท่าที่ 6 งอข้อนิ้วมือ</h2>
            <br />
            </div>

            <div className="myVi3">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/XjaoiNgKNW4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-success"><h5>กำมือผู้ป่วย และกางออก 10 ครั้ง พับนิ้วของผู้ป่วยทีละนิ้วเรียงกันไป 10 ครั้ง</h5>
            <h5>จับนิ้วหัวแม่มือ เเล้วอีกข้างจับนิ้วที่เหลิือมาแตะที่นิ้วหัวแม่มือทีละนิ้ว 10 ครั้ง</h5>
            </span>

            <br />
            </div>

            <br />
            <br />
            
            <div className="myVi">
            <h1>------------------------------------------------------------</h1>
            <br />
            <br />
            <h2>ท่าที่ 7 กางนิ้วมือ</h2>
            <br />
            </div>

            <div className="myVi3">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/J1QcPZXOwwc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-success"><h5>กางนิ้วมือผู้ป่วยเข้า-ออก 10 ครั้ง</h5>
            
            </span>

            <br />
            </div>

            <br />
            <br />
 
            <div>
            <Card className="li3">
            <CardImg style={{ width:1900,height:270}} src="https://www.desktopbackground.org/p/2013/10/22/658236_green-polygon-backgrounds-texturezine_3500x2500_h.jpg" alt="Card image" />
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

export default Wed;