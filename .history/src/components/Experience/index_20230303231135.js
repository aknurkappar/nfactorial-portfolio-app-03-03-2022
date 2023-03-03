 import "./index.css"

 export const Experience = () =>{
    return(
        <div className="experience">
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
        </div>
    )
}