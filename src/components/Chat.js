import React from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
function Chat() {
  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName># javascript</ChannelName>
          <ChannelInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            nulla!
          </ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>Details</div>
          <InfoIcon></InfoIcon>
        </ChannelDetails>
      </Header>
      <MessageContainer>
        <ChatMessage />
      </MessageContainer>
      <ChatInput />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`;
const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
`;
const MessageContainer = styled.div``;

const Channel = styled.div``;
const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
`;
const ChannelName = styled.div`
  font-weight: 700;
`;
const ChannelInfo = styled.div`
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`;
const InfoIcon = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`;
