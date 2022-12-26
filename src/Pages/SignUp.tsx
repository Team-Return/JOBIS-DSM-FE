import styled from "styled-components";
import Background from "../Components/Background/Background";
import Register from "../Components/Register/Register";

const SignUp = () => {
  return (
    <Container>
      <Background></Background>
      <Register></Register>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
