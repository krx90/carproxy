import './MenuBar.css';
import { Link } from 'react-router-dom';
import image from '../assets/sound.png';
import image1 from '../assets/chat.png';
import image2 from '../assets/settings.png';

function MenuBar() {
    return(
        <div className='menu-bar'>
            <div className='menu-icons'>
                <Link to = 'Chats.tsx' className='chat-icon-button'><img src={image1} alt="chat-icon" className="chat-icon"/></Link>
                <button className='live-button-circle'><img src={image} alt="live-button" className="live-button"/></button>
                <a className='settings-icon-button'><img src={image2} alt="settings-icon" className='settings-icon'/></a>
            </div>
        </div>
    )
    
}

export default MenuBar;
