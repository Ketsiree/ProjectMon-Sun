import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card,CardImg,CardTitle, CardText,CardImgOverlay} from 'reactstrap';
import './Satur.css';


const Satur = () => {
    return (
        <div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
            </style>
            <div className="myStyleSat">
                <br />
            <h1>Saturday Schedule</h1>
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
            <h2>การกายภาพกล้ามเนื้อหัวใจ</h2>
            <br />
            </div>

            <div className="myVi6">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/1ijtetsjHAE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-primary"><h5>ควรหยุดออกกำลังกายและปรึกษาแพทย์ถ้ามีอาการดังต่อไปนี้ </h5> <br />	
            <h5>    -	เจ็บหน้าอก หรือแน่นหน้าอก</h5>	<br />	
            <h5>    -   อ่อนแรง หรือเหนื่อยกว่าปกติ</h5>  <br />	
            <h5>    -	ใจสั่น หรือรู้สึกว่าใจเต้นผิดปกติ</h5>	<br />		
            <h5>    -   หอบเหนื่อย มึนงงศีรษะ จะเป็นลม</h5> <br />	
            <h5>    -	รู้สึกปวด ขัด ตึง บวม บริเวณกล้ามเนื้อ เอ็น ข้อต่อต่าง ๆ ระหว่างหรืออกกำลังกาย</h5>
            </span>

            <br />
            </div>

            <br />
            <br />

            <div>
            <Card className="li6">
            <CardImg style={{ width:1900,height:270}} src="https://wallpapertag.com/wallpaper/full/1/9/4/152429-widescreen-purple-background-tumblr-1920x1080.jpg" alt="Card image" />
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

export default Satur;