 import "./index.css"
 import myPhoto from "../../assets/myPhoto.jpg"

 export const About = ()=>{
    return(
        <div className="about">

            <div>
                <p className="about-header">About me</p>

            </div>

            <img src={myPhoto} alt="my-photo"/>
        </div>
    )
 }