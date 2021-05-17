import React, {forwardRef} from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import "./Message.css";

const Message = forwardRef (({message, username}, ref) => {  //forward ref is wrapping the whole code with additional functionalities
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            {console.log(isUser ? "message_userCard" : "message_guestCard")}
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography variant="h5" component="h2" color="white">
                        {!isUser && `${message.username || 'Unkown user'}: `} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
