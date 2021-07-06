import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [rooms] = useCollection(roomId && db.collection("rooms").doc(roomId));
  const [messages, loading] = useDocument(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth"
    });
    // console.log(chatRef?.current?.scrollIntoView());
  }, [roomId, loading]);
  return (
    <ChatContainer>
      {rooms && messages && (
        <>
          <ChatHeader>
            <ChatHeaderLeft>
              <h4>
                <strong>{rooms?.data().name}</strong>
              </h4>
              <StarBorderIcon />
            </ChatHeaderLeft>
            <ChatHeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </ChatHeaderRight>
          </ChatHeader>
          <Chatbox>
            {/* list of messages from db */

            loading ? (
              <p>Loading...</p>
            ) : (
              messages?.docs.map(doc => {
                const { message, timestamp, user, userImage } = doc.data();
                return (
                  <Message
                    key={doc.id}
                    message={message}
                    user={user}
                    userImage={userImage}
                    timestamp={timestamp}
                  />
                );
              })
            )}
            <ChatBottom ref={chatRef} />
          </Chatbox>
          <ChatInput
            chatRef={chatRef}
            roomId={roomId}
            channelName={rooms?.data().name}
          />
        </>
      )}
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
`;
const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid lightgrey;
`;
const ChatHeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const ChatHeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-weight: 400;

    > .MuiSvgIcon-root {
      padding: 5px;
    }
  }
`;

const Chatbox = styled.div``;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
