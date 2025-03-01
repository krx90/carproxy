import './MenuBar.css';
import image from '../assets/sound.png';
import image1 from '../assets/chat.png';
import image2 from '../assets/settings.png';
import { Link } from 'react-router-dom';

function MenuBar() {
    return(
        <div className='menu-bar'>
            <div className='menu-icons'>
                <Link to='/chats' className='chat-icon-button'><img src={image1} alt="chat-icon" className="chat-icon"/></Link>
                <Link to='/home' className='live-button-circle'><img src={image} alt="live-button" className="live-button"/></Link>
                <Link to='/settings' className='settings-icon-button'><img src={image2} alt="settings-icon" className='settings-icon'/></Link>
            </div>
        </div>
    )
    
}

export default MenuBar;
