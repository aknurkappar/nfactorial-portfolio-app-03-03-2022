 import "./index.css"
 import myPhoto from "../../assets/myPhoto.jpg"

 const portfolioAboutSections = [
    "Lorem Ipsum Description Text",
    "Lorem Ipsum Description Text",
    "Lorem Ipsum Description Text",
    "Lorem Ipsum Description Text"
 ]

 export const About = () =>{
    return(
        <div className="about">

<Line />

            <img src={myPhoto} alt="my-photo"/>
        </div>
    )
}