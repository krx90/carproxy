import './MenuBar.css';
import image from '../assets/sound.png';
import image1 from '../assets/chat.png';
import image2 from '../assets/settings.png';

function MenuBar() {
    return(
        <div className='menu-bar'>
            <div className='menu-icons'>
                <button className='chat-icon-button'><img src={image1} alt="chat-icon" className="chat-icon"/></button>
                <button className='live-button-circle'><img src={image} alt="live-button" className="live-button"/></button>
                <button className='settings-icon-button'><img src={image2} alt="settings-icon" className='settings-icon'/></button>
            </div>
        </div>
    )
    
}

export default MenuBar;
