import './LogoBar.css';
import image from '../assets/only text logo.png';
import image1 from '../assets/only icon logo.png';

function LogoBar() {
    return (
        <div className='header-logo'>
            <img src={image1} alt="logo-icon" className='logo-icon'/>
            <img src={image} alt="logo-text" className='logo-text'/>
        </div>
    )
}

export default LogoBar;