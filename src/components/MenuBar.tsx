import './MenuBar.css';
import image from '../assets/sound.png';

function MenuBar() {
    return(
        <div className="menu-bar">
            <div className = "button-circle"><img src={image} alt="live-button" className="live-button"/></div>
        </div>
    )
    
}

export default MenuBar;
