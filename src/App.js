import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Message from "./Message";
import './App.css';
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    //run once when app component loads
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc =>({id: doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])

  const sendMeassage = (event) =>{
    // all logic to send messages
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" alt="messenger" />
     <h2>welcome {username}</h2>
      
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event =>setInput(event.target.value)} />
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMeassage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({id, message}) =>(                               //key helps react know to only re render sent data not whole page
            <Message key={id} username={username} message={message} />  //sent message object as props bcz message object 
          ))                                                            //can have user who hasn't logged in
        }                                                                           
      </FlipMove>                                                       
    </div>                                                   
  );
}

export default App;
