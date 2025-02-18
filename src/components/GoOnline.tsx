import "./GoOnline.css";
import image from "../assets/wifi.png";

let IsOnline = true;
let ConnectedUsers = ["User1", "User2", "User3", "User4"];


function GoOnline() {
  if (IsOnline) {
    return (
      <div className="page">
        <div className="connected-users">
          {ConnectedUsers.length === 0 ? <p className="list-group">No People Found Nearby</p> : null}
          <ul className="list-group">
            {ConnectedUsers.map((item) => (
              <li key={item}> {item}</li>
            ))}
          </ul>
        </div>
        <button className="button">
          <img src={image} alt="button-icon" className="button-icon" />
          Connect
        </button>
      </div>
    );
  } else {
  }
}

export default GoOnline;
