import "./GoOnline.css";
import React, { useState } from "react";
import image from "../assets/wifi.png";
import image1 from "../assets/no-wifi.png";



function GoOnline() {
  const [IsOnline, setIsOnline] = useState(false);
  let ConnectedUsers = ["User1", "User2", "User3", "User4"];
  const ToggleIsOnline = () => {
    setIsOnline((prevStatus) => !prevStatus);
  };

  if (IsOnline) {
    return (
      <div className="page">
        <div className="connected-users">
          {ConnectedUsers.length === 0 ? (
            <p className="list-group">No People Found Nearby</p>
          ) : null}
          <ul className="list-group">
            {ConnectedUsers.map((item) => (
              <li key={item}> {item}</li>
            ))}
          </ul>
        </div>
        <button className="button" onClick={ToggleIsOnline}>
          <img src={image1} alt="button-icon" className="button-icon" />
          Disconnect
        </button>
      </div>
    );
  } else {
    return (
      <div className="page">
        <p>Connect to speak with others...</p>
        <button className="button" onClick={ToggleIsOnline}>
          <img src={image} alt="button-icon" className="button-icon" />
          Connect
        </button>
      </div>
    );
  }
}



export default GoOnline;
