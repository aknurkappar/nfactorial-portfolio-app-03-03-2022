import "./index.css"
import { Outlet, Link } from "react-router-dom";

class Menu{
    constructor(name, path){
        this.name = name;
        this.path = path;
    }
 }

 const menues = [
    new Menu("About", "/about"),
    new Menu("Experience", "/experience"),
    new Menu("Projects", "/projects"),
    new Menu("Contacts", "contacts"),
 ]
 
 export const Header = () => {
    return (
        <div className="header">
            <p>Aknur</p>
            <ul className="menu-items">{
                menues.map((menu, index) => (
                <li><Link to = {menu.path} onClick={ () => {
                    window.scrollTo(900*index, 900*index)
                    console.log("scrolled")
            }}>{menu.name}</Link></li>
                ))
            }</ul>
        </div>
    )
}