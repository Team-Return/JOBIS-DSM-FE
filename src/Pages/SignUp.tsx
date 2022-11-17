import styled from "styled-components";
import Register from "../Components/Register/Register";

const SignUp = () => {
  return (
    <Container>
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
