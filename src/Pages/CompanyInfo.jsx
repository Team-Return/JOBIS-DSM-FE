import styled from "styled-components";
import Companies from "../Components/Companies/Companies";

function CompanyInfo() {
  return (
    <Container>
      <Companies />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

export default CompanyInfo;
