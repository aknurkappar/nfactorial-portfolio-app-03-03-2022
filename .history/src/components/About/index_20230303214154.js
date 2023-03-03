 import "./index.css"
 import myPhoto from "../../assets/myPhoto.jpg"

 export const About = ()=>{
    return(
        <div className="about">

            <div>
                <p className="about-header">About me</p>
                <p>I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio.</p>
                <p>
                    
                </p>

            </div>

            <img src={myPhoto} alt="my-photo"/>
        </div>
    )
 }