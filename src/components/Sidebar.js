import React, { useRef, useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import AppsIcon from "@material-ui/icons/Apps";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import DraftsIcon from "@material-ui/icons/Drafts";
import InboxIcon from "@material-ui/icons/Inbox";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import { db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.js";
import { useSelector } from "react-redux";
import { selectNavBurger } from "../features/appSlice";
import { useDispatch } from "react-redux";
import { changeNavBurger } from "../features/appSlice";

function Sidebar({ appRef }) {
  const sidebarRef = useRef(null);
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  const stateOfBurger = useSelector(selectNavBurger);
  useEffect(() => {
    if (stateOfBurger) {
      console.log(`vsisble karo`);
      sidebarRef.current.position = "sticky";

      sidebarRef.current.style.left = "0px";
      sidebarRef.current.style.backroundColor = "red";
    } else {
      // sidebarRef.current.position = "absolute";

      sidebarRef.current.style.left = "-400px";
    }
    // sidebarRef.current.visibility = "visible";
  }, [stateOfBurger]);

  const handleSidebarClick = e => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      // setIsVisible(false);
      console.log("outside click");
      sidebarRef.current.style.left = "-400px";
    } else {
      console.log("inside clicked");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleSidebarClick);
    return () => {
      document.removeEventListener("click", handleSidebarClick);
    };
  }, []);
  return (
    <SidebarContainer onClick={handleSidebarClick} ref={sidebarRef}>
      <SidebarHeader>
        <SidebarInfo>
          <h3>{user.displayName}</h3>
          <p>{user.email.split("@")[0]}</p>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarMiddle>
        <SidebarOption title="Threads" Icon={InsertCommentIcon} />
        <SidebarOption title="Mentions & Reactions" Icon={InboxIcon} />
        <SidebarOption title="saved Icons" Icon={DraftsIcon} />
        <SidebarOption title="Chanel Brwoser" Icon={BookmarkIcon} />
        <SidebarOption title="People and user groups" Icon={PeopleAltIcon} />
        <SidebarOption title="Apps" Icon={AppsIcon} />
        <SidebarOption title="File Browser" Icon={FileCopyIcon} />
        <SidebarOption title="Show Less" Icon={ExpandLessIcon} />
        <hr />
        <SidebarOption title="Channels" Icon={ExpandMoreIcon} />
        <hr />
        <SidebarOption title="Add Channel" addChannelOption Icon={AddIcon} />
        {channels?.docs.map((doc, index) => {
          return (
            <SidebarOption
              index={index}
              key={doc.id}
              id={doc.id}
              title={doc.data().name}
            />
          );
        })}
      </SidebarMiddle>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background: var(--app-color);
  flex: 0.3;
  padding: 10px;
  max-width: 250px;
  overflow-y: scroll;
  z-index: 10;
  height: calc(100vh - 50px);
  transition: 0.5s;

  @media (max-width: 650px) {
    position: absolute;
    left: -400px;
    top: 0px;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin-bottom: 20px;
`;
const SidebarInfo = styled.div`
  > h3 {
    font-size: 17px;
  }
  > p {
    font-size: 14px;
    color: lightgrey;
  }
`;
const SidebarMiddle = styled.div`
  > hr {
    margin: 10px 0px;
    border: 1px solid rgba(140, 30, 155);
  }
`;
// फु
// महफुज हसन
