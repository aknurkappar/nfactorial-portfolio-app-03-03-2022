import "./index.css"
import { Outlet, Link } from "react-router-dom";

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
            <p>Aknur</p>
            <ul className="menu-items">{
                menues.map(menu => (
                <li><Link>{menu.name}</Link></li>
                ))
            }</ul>
        </div>
    )
}