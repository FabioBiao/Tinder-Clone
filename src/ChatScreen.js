import React, { useState, useEffect } from 'react';
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar"

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
            message: 'Whats up'
        },
        {
            message: 'hey'
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <h2>Chat Screen</h2>
            <p className="chatScreen__timestamp">You matched with Ellen on 10/08/20</p>

            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) :
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
            ))}



            <form className="chatScreen__input">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField" type="text" placeholder="Type a message" />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">Send</button>
            </form>


        </div>
    )
}

export default ChatScreen
