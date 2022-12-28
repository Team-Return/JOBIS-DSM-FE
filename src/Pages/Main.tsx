import styled from "styled-components";
import Background from "../Components/Background/Background";
import SignIn from "../Components/SignIn/SignIn";

const Main = () => {
  return (
    <Container>
      <Background />
      <SignIn></SignIn>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`;
