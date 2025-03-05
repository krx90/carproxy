import { Fragment } from "react/jsx-runtime";
import "./ChatList.css";

let ChatNames = ['Albert', 'John', 'Tiffany', 'Ellie']

function ChatList (){
    return (
        <div className="chat-page">
            <Fragment>

                    <div className="spaceholder"></div>
                    <h1 className="title">Chats</h1>
                    {ChatNames.length === 0 ? <p>No Chats Found</p> : null}
                    <ul className="chat-list">
                        {ChatNames.map((item) => (
                            <li key = {item}> {item} </li>
                        ))}
                    </ul>

            </Fragment>
        </div>
    )
}

export default ChatList; 