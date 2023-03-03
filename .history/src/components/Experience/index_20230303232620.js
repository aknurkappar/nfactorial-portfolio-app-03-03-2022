 import "./index.css"

 const experiencesList = [
    {
        year : "2021-2022",
        role : "The Role at the Company",
        location : "Country, City",
        description : "I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio."
    }
 ]

 export const Experience = () =>{
    return(
        <div className="experience">
                <p className="experience-header">Experience</p>
                <ul>
                    {
                        experiencesList.map((item, index) => (
                            <p>{item.year}</p>
                            <div>
                                
                            </div>
                        ))
                    }
                </ul>
        </div>
    )
}