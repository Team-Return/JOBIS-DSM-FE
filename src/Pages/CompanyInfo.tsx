import styled from "styled-components";
import Background from "../Components/Background/Background";
import Companies from "../Components/Companies/Companies";

function CompanyInfo() {
  return (
    <Container>
      <Background></Background>
      <Companies />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`;

export default CompanyInfo;
