import React from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
function ChatInput() {
  return (
    <Container>
      <InputContainer>
        <form action="">
          <input type="text" placeholder="Enter the Message" />
          <SendButton>
            <Send />
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding: 0 20px 20px 20px;
`;
const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 5px;
  form {
    display: flex;
    height: 45px;
    align-items: center;
    padding-left: 10px;
    input {
      flex: 1;
      border: none;
      outline: none;
      background-color: transparent;
      font-size: 16px;
    }
  }
`;
const SendButton = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const Send = styled(SendIcon)`
  color: grey;
  cursor: pointer;
  :hover {
    color: #3f0e40;
  }
`;
