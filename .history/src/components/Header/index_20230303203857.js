import { MenuItem } from "@mui/material";

 
 class Menu{
    constructor(name){
        this.name = name;
        this.isActive = fasle;
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
        <div>
            
            <p>Aknur</p>
            <ul>
                <li>{menus[0].name}</li>
            </ul>
        </div>
    )
 }