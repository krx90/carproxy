import "./GoOnline.css";
import image from "../assets/wifi.png";

let IsOnline = true;
let ConnectedUsers = ["User1", "User2", "User3", "User4"];

function GoOnline() {
  if (IsOnline) {
    return (
      <div>
        {ConnectedUsers.length === 0 ? <p>No People Found Nearby</p> : null}
        <ul className="list-group">
          {ConnectedUsers.map((item) => (
            <li key={item}> {item}</li>
          ))}
        </ul>
      </div>
    );
  } else {
  }
}

export default GoOnline;
