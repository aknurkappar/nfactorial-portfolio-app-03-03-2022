import { MenuItem } from "@mui/material";

 
 class Menu{
    constructor(name){
        this.name = name;
        this.isActive = fasle;
    }
 }

 const menues = [
    new Menu("About")
 ]
 
 
 export const Header = () => {
    return (
        <div>
            
            <p>Aknur</p>
            <ul>
                <li>{menubar.name}</li>
            </ul>
        </div>
    )
 }