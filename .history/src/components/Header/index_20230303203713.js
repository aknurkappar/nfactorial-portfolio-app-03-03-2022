 
 class Menu{
    constructor(name){
        this.name = name;
        
    }
 }
 
 
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