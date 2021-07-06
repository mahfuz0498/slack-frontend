import React from "react";
import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import TimerIcon from "@material-ui/icons/Timer";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.js";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch } from "react-redux";
import { changeNavBurger } from "../features/appSlice";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector } from "react-redux";
import { selectNavBurger } from "../features/appSlice";

function Header() {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const stateOfBurger = useSelector(selectNavBurger);
  const handleLogout = e => {
    auth.signOut();
  };
  return (
    <HeaderContainer>
      <HeaderLeft>
        <AvatarComponent
          onClick={handleLogout}
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <NavBurger onClick={() => dispatch(changeNavBurger())}>
          {stateOfBurger ? <CloseIcon /> : <MenuIcon />}
        </NavBurger>
        <TimerIcon />
      </HeaderLeft>
      <HeaderMid>
        <HeaderMidContainer>
          <SearchIcon />
          <input type="text" />
        </HeaderMidContainer>
      </HeaderMid>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

// if other file --->  Header.style.js

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background: var(--app-color);
  position: sticky;
  top: 0;
  z-index: 11;
  height: 50px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  flex: 0.25;
  color: white;
`;

const NavBurger = styled.div`
  border: 2px solid white;
  padding: 0px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.25s;

  :hover {
    color: rgba(160, 190, 222);
    border-color: rgba(160, 190, 222);
  }

  @media (min-width: 650px) {
    display: none;
  }
`;
const HeaderMid = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;
const HeaderMidContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 0px 5px;
  opacity: 0.5;
  color: white;
  width: 100%;
  max-width: 400px;
  > input {
    width: 100%;
    background: var(--app-color);
    outline-width: 0;
    border: none;
    color: white;
  }
`;
const HeaderRight = styled.div`
  flex: 0.25;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  color: white;
`;
const AvatarComponent = styled(Avatar)`
  /* > .MuiSvgIcon-root {
    color: red;
    background: green;
  } */
`;
