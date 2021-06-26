import React from "react";
import styled from "styled-components";
function ChatMessage() {
  return (
    <Container>
      <UserAvatar>
        <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="" />
      </UserAvatar>
      <MessageContent>
        <Name>
          Mustafa
          <Date>27/06/2021 11:14:33 AM</Date>
        </Name>
        <Text>Lorem </Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  transition: all 0.5s;
  :hover {
    background-color: rgb(221, 221, 221, 0.8);
  }
`;
const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  overflow: hidden;
  margin-right: 10px;
  img {
    width: 100%;
  }
`;
const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.span`
  font-weight: 700;
  font-size: 15px;
`;
const Text = styled.span``;
const Date = styled.span`
  font-weight: 400;
  font-size: 13px;
  color: rgb(97, 96, 97);
  margin-left: 10px;
`;
