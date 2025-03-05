import LogoBar from "../components/LogoBar";
import MenuBar from "../components/MenuBar";
import ChatList from "../components/ChatList";

export default function Chats() {
    return(
        <div>
            <LogoBar></LogoBar>
            <ChatList></ChatList>
            <MenuBar></MenuBar>
        </div>
    )
}