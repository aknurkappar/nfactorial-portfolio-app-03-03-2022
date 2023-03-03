 import "./index.css"
 import myPhoto from "../../assets/portfolio-image.png"

 const portfolioAboutSections = [
    "Lorem Ipsum Description Text",
    "Lorem Ipsum Description Text",
    "Lorem Ipsum Description Text",
    "Lorem Ipsum Description Text"
 ]

 export const About = () =>{
    return(
        <div className="about">

            <div>
                <p className="about-header">About me</p>
                <p>I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio.</p>
                <ul>
                    {
                        portfolioAboutSections.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>

            <img src={myPhoto} alt="my-photo"/>
        </div>
    )
}