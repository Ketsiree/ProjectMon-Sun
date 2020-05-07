import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card,CardImg, CardTitle, CardText,CardImgOverlay } from 'reactstrap';
import './Thurs.css';


const Thurs = () => {
    return (
        <div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
            </style>
            <div className="myStyleThurs">
                <br />
            <h1>Thursday Schedule</h1>
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
            <h2>ท่าที่ 8 งอ-เหยียดข้อสะโพก</h2>
            <br />
            </div>

            <div className="myVi4">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/UMuGkxphXmI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-warning"><h5>ยกขาขึ้นเเล้ววางตั้งไขว้กับขาอีกข้าง</h5>
            <h5>ค่อยๆกดน้ำหนักลงจนตึง จึงคลายออก ทำด้านละ 10 ครั้ง</h5>
            </span>

            <br />
            </div>

            <br />
            <br />
            
            <div className="myVi">
            <h1>------------------------------------------------------------</h1>
            <br />
            <br />
            <h2>ท่าที่ 9 งอ-เหยียดข้อสะโพก</h2>
            <br />
            </div>

            <div className="myVi4">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/liLOcYAj9O8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-warning"><h5>จับบริเวณข้อเท้า และ ข้อเข่าด้านล่าง เเล้วยกขาขึ้นเป็นมุมฉาก ทำข้างละ 10 ครั้ง</h5>
            
            </span>

            <br />
            </div>

            <br />
            <br />
 
            <div>
            <Card className="li4">
            <CardImg style={{ width:1900,height:270}} src="https://i.pinimg.com/originals/00/6b/80/006b804022ed749ed1a7e84e3f45e301.jpg" alt="Card image" />
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

export default Thurs;
