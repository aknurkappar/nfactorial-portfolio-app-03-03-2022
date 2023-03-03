 import "./index.css"

 export const Experience = () =>{
    return(
        <div className="experience">
                <p className="experience-header">E</p>
                <p>I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio.</p>
                <ul>
                    {
                        portfolioAboutSections.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
        </div>
    )
}