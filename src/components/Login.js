import React from "react";
import styled from "styled-components";
import slacklogo from "../assets/slacklogo.png";
import { auth, provider } from "../firebase";
function Login({ setUser }) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container>
      <Content>
        <SlackImg src={slacklogo} />
        <h1>Sign in Slack</h1>
        <SignInButton onClick={signIn}>Sign In With Google</SignInButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: white;
  padding: 100px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgb(0 0 0 /12%), 0 1px 2px rgb(0 0 0 /24%);
`;
const SlackImg = styled.img`
  height: 100px;
  background-color: white;
`;

const SignInButton = styled.button`
  margin-top: 50px;
  background-color: #df1562;
  color: #f3f3f3;
  border: none;
  outline: none;
  height: 40px;
  border-radius: 5px;
  font-family: "Mina", sans-serif;
  font-size: 15px;
  letter-spacing: 2px;

  cursor: pointer;
  transition: all 0.3s;
  :hover {
    background-color: #f3f3f3;
    color: #df1562;
    padding: 0 10px;
    border: 1px solid #df1562;
  }
`;
