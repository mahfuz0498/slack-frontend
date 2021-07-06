import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { db } from "../firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.js";

function ChatInput({ roomId, channelName, chatRef }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(input);

    // save the input message to  db with particular id
    if (!roomId) {
      return false;
    }
    input &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: user?.displayName,
          userImage: user?.photoURL
        });
    chatRef?.current?.scrollIntoView({
      behavior: "smooth"
    });
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={`message ${channelName}`}
          type="text"
        />
        <Button hidden type="submit" onClick={handleSubmit}>
          send
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 0;
  > form {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 400px;

    > input {
      width: 100%;
      margin-bottom: 10px;
      height: 30px;
      outline-width: 0;
      border: 1px solid light grey;
    }
    > button {
      display: none;
    }
  }
`;
