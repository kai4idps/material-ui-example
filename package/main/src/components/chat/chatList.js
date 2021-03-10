import React from "react";
import Chat from "./chatListItem";
import { Nav } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { openChat } from '../../redux/chat/action';

const ChatList = () => {

    const filterChats = (chats, chatSearch) => {
        if (chatSearch !== '')
            return chats.filter(t => t.name.toLocaleLowerCase().includes(chatSearch.toLocaleLowerCase()))
        else
            return chats
    }

    const chats = useSelector((state) => filterChats(state.chatReducer.chats, state.chatReducer.chatSearch));

    const dispatch = useDispatch();

    return (
        <Nav className="list-unstyled d-block mailbox chat-users">
            <div className="message-center" style={{ 'height': 'calc(100vh - 274px)' }}>
                {chats.map(chat => (
                    <Chat
                        key={chat.id}
                        {...chat}
                        onClick={() => dispatch(openChat(chat.id))}
                        thumb={chat.thumb}
                        status={chat.status}
                        contactName={chat.name}
                        chatExcerpt={chat.excerpt}
                    />
                ))}
            </div>
        </Nav>
    );
};

export default ChatList;
