import "./index.css"

 
 class Menu{
    constructor(name){
        this.name = name;
        this.isActive = false;
    }
 }

 const menues = [
    new Menu("About"),
    new Menu("Experience"),
    new Menu("Projects"),
    new Menu("Contacts"),
 ]
 
 
 export const Header = () => {
    return (
        <div className="header">
            <div></div>
            
            <p>Aknur</p>
            <ul className="menu-items">{
                menues.map(menu => (
                    <li>{menu.name}</li>
                ))
            }</ul>
            <div className="line"></div>

        </div>
    )
 }