import React, { useEffect } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { enterRoom } from "../features/appSlice";
import { useDispatch } from "react-redux";
function SidebarOption({ title, index, Icon, addChannelOption, id }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (index === 0) {
      selectChannel();
    }
  }, []);

  const addChannel = () => {
    console.log("channel created");
    const channelName = prompt("Name of channel ?");
    if (channelName) {
      // creating the collection with channel name

      db.collection("rooms").add({
        name: channelName
      });
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id
        })
      );
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon />}
      {Icon ? (
        <p>{title} </p>
      ) : (
        <SidebarChannelOption>
          <span>#</span>
          {title}
        </SidebarChannelOption>
      )}
      {/* <Icon />
      <p>{title} </p> */}
    </SidebarOptionContainer>
  );
}
export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  padding: 0px 5px;
  align-items: center;
  > .MuiSvgIcon-root {
    font-size: 27px;
    margin: 5px 10px 5px 5px;
    color: var(--app-color);
    background: rgba(254, 254, 254, 0.9);

    border-radius: 99px;
    padding: 3px;
    transition: 0.3s;
  }
  > .MuiSvgIcon-root:hover {
    /* color: rgba(196, 97, 207); */
    background-color: white;
  }

  > p {
    color: rgba(254, 254, 254, 0.9);
    font-size: 15px;
    font-weight: 450;
  }
  :hover {
    color: red;
    background: rgba(254, 254, 254, 0.2);
  }
`;

const SidebarChannelOption = styled.div`
  padding: 5px;
  color: white;
  font-size: 15px;
  font-weight: 500;
  /* margin: 5px 0px; */
  > span {
    /* border: 1px solid lightgrey; */
    padding: 5px;
    /* background: white; */
    border-radius: 99px;
  }
`;
