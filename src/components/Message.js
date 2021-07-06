import React from "react";
import styled from "styled-components";

function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainerr>
      <img src={userImage} alt="" />
      {/* {console.log("message" + message)}
      {console.log("timestamp" + timestamp)} */}
      {/* {console.log(new Date(timestamp?.toDate()).toUTCString())} */}
      <MessageContainerInformation>
        <MessageInfoHeader>
          <p>{user}</p>

          <span>{"   " + new Date(timestamp?.toDate()).toUTCString()}</span>
        </MessageInfoHeader>
        <MessageContainerBody>{message}</MessageContainerBody>
      </MessageContainerInformation>
    </MessageContainerr>
  );
}

export default Message;

const MessageContainerr = styled.div`
  border: 1px solid lightgrey;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  margin: 10px;
  > img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`;
const MessageContainerInformation = styled.div`
  width: 100%;
`;
const MessageInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > span {
    color: lightgrey;
    margin-left: 20px;
  }
`;
const MessageContainerBody = styled.div``;
