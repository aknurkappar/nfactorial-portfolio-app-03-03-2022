import { MenuItem } from "@mui/material";

 
 class Menu{
    constructor(name){
        this.name = name;
        this.isActive = fale;
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
                <li>{menues[0].name}</li>
            </ul>
        </div>
    )
 }