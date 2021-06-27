import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { useParams } from "react-router-dom";
import db from "../firebase";
import firebase from "firebase";
function Chat({ user }) {
  const { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);
  const getChannel = () => {
    db.collection("rooms")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
      });
  };
  const getMessages = () => {
    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        setMessages(messages);
      });
  };

  const sendMessage = (text) => {
    if (channelId) {
      let payload = {
        text: text,
        timestamp: firebase.firestore.Timestamp.now(),
        user: user.name,
        photo: user.photo
      };
      db.collection("rooms").doc(channelId).collection("messages").add(payload);
      console.log(payload);
    }
  };

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId]);
  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName># {channel?.name}</ChannelName>
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
        {messages.length > 0 &&
          messages.map((message, i) => (
            <ChatMessage key={i} message={message} />
          ))}
      </MessageContainer>
      <ChatInput sendMessage={sendMessage} />
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
