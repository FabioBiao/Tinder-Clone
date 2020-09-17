import React from 'react';
import "./Chats.css";
import Chat from "./Chat.js";

function Chats() {
    return (

        <div className="chats">
            <Chat
                name='Sarah'
                message='Whats up'
                timestamp='35 minutes ago'
                profilePic='https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg'
            />
        </div >
    )
}

export default Chats
