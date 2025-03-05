import { Fragment } from "react/jsx-runtime";
import "./ChatList.css";

let ChatNames = ['albert', 'john', 'tiffany', 'ellie']

function ChatList (){
    return (
        <Fragment>
            <h1>Chats</h1>
            {ChatNames.length === 0 ? <p>No Chats Found</p> : null}
            <ul className="chat-list">
                {ChatNames.map((item) => (
                    <li key = {item}> {item} </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default ChatList(); 