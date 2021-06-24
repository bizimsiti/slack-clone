import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
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
        <MainChannelItem>
          <AddCircleOutlineIcon />
          add
        </MainChannelItem>
      </MainChannels>
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
const MainChannels = styled.div``;
const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
`;
