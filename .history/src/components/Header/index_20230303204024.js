import { MenuItem } from "@mui/material";

 
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
        <div>
            
            <p>Aknur</p>
            <ul>

            {
                    menues.forEach(menu => {
                        <li>{menu.name}</li>
                    })
                }
                {
                    menues.forEach(menu => {
                        <li>{menu.name}</li>
                    })
                }
            </ul>
        </div>
    )
 }