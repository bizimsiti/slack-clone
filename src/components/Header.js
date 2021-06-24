import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search..." />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>Ali</Name>
        <UserImage>
          <img src="https://imgur.com/6VBx3io.png" alt="" />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background-color: #350d36;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
`;
const Main = styled.div`
  display: flex;
  margin: 0 16px;
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;
const SearchContainer = styled.div`
  min-width: 400px;
  margin: 0 16px;
`;
const Search = styled.div`
  width: 100%;
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  border-radius: 6px;
  input {
    background-color: transparent;
    border: none;
    padding: 4px 8px;
    outline: none;
    color: #f3f3f3;
  }
`;
const Name = styled.div`
  padding-right: 16px;
`;
const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid #f3f3f3;
  border-radius: 2px;
  img {
    width: 100%;
  }
`;
