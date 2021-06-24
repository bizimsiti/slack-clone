import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar />
            <Switch>
              <Route path="/room">
                <Chat />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 38px auto;
`;

const Main = styled.div`
  background-color: #f3f3f3;
  display: grid;
  grid-template-columns: 260px auto;
`;