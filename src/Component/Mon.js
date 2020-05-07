import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, CardImg,CardTitle, CardText,CardImgOverlay} from 'reactstrap';
import './Mon.css';


const Mon = () => {
    return (
        <div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
            </style>
            <div className="myStyleM">
                <br />
            <h1>Monday Schedule</h1>
            
            </div>
            <br />
            <br />
            <br />

            <div className="myVi">
            <br />

            <h1>ท่ากายภาพวันนี้</h1>
            <br />
            <h2>ท่าที่ 1 ยกแขนขึ้น-ลง</h2>
            <br />
            </div>

            <div className="myVi1">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/boKNMvHBSBs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-warning"><h5>จับบริเวณข้อศอก และข้อมือของผู้ป่วยให้หงายขึ้น ยกขึ้นตรงๆ </h5>
            <h5>ตามแนวระนาบข้างลำตัวเป็นจังหวะช้าๆ ยกขึ้นให้สุดจนถึงขนานกับหู แล้วเอาลงช้าๆเป็นจังหวะ</h5>
            </span>

            <br />
            </div>

            <br />
            <br />
            
            <div className="myVi">
            <h1>------------------------------------------------------------</h1>
            <br />
            <br />
            <h2>ท่าที่ 2 กาง-หุบแขน</h2>
            <br />
            </div>

            <div className="myVi1">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/bxdKJBoJ63M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-warning"><h5>จับบริเวณข้อศอก และข้อมือของผู้ป่วยพร้อมกางแขนออกมาด้านข้าง </h5>
            <h5>ค่อยๆงอข้อศอกและเหยียดแขนขึ้นชิดศีรษะ แล้วจึงงอข้อศอกกลับมาในทิศทางเดิม</h5>
            </span>

            <br />
            </div>

            <br />
            <br />
            
            <div className="myVi">
            <h1>------------------------------------------------------------</h1>
            <br />
            <br />
            <h2>ท่าที่ 3 หมุนข้อไหล่ เข้า-ออก</h2>
            <br />
            </div>

            <div className="myVi1">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/pkhdxDSHPVI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-warning"><h5>จับบริเวณข้อศอก และข้อมือของผู้ป่วยพร้อมกางแขนออกมาด้านข้างตั้งเป็น</h5>
            <h5>มุมฉาก 90 องศา ดันแขนผู้ป่วยลงด้านบน 10 ครั้ง และดันลงด้านล่าง 10 ครั้ง</h5>
            </span>

            <br />
            </div>
            <div>
            <Card className="li1">
            <CardImg style={{ width:1900,height:270}} src="https://eskipaper.com/images/yellow-background-9.jpg" alt="Card image" />
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

export default Mon;