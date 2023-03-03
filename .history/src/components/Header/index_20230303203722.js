 
 class Menu{
    constructor(name){
        this.name = name;
        this.isActive = fasle
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