import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItems } from "../components/data/SidebarData";
import AddIcon from "@material-ui/icons/Add";
function Sidebar() {
  return (
    <Container>
      <WorkSpaceContainer>
        <Name>mustafa ali Metin</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkSpaceContainer>
      <MainChannels>
        {sidebarItems.map((item) => (
          <MainChannelItem>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon />
        </NewChannelContainer>
        <ChannelsList>
          <Channel># Channel 1</Channel>
          <Channel># Channel 2</Channel>
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background-color: #3f0e40;
  color: #f3f3f3;
`;
const WorkSpaceContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  border-bottom: 1px solid #533753;
`;
const Name = styled.div``;
const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
  border-radius: 50%;
  color: #3f0e40;
  fill: #3f0e40;
  margin-right: 20px;
  cursor: pointer;
`;
const MainChannels = styled.div`
  padding-top: 20px;
`;
const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
  :hover {
    background-color: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 20px;
`;
const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 20px;
  padding-right: 20px;
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
  :hover {
    background-color: #350d36;
  }
`;
