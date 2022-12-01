import styled from "styled-components";
import CheckBox from "./CheckBox";

const MustHave = () => {
  return (
    <Container>
      <CheckBox title="국가자격증" />
      <Add>+ 추가</Add>
      <CheckBox title="성적" />
      <Wrapper>
        <Input type="number" max={100} min={0} maxLength={3} />
        <Percent>% 이내</Percent>
      </Wrapper>
    </Container>
  );
};

export default MustHave;

const Container = styled.div`
  width: 430px;
  height: 130px;
  margin-bottom: 20px;
  margin-left: 71px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Add = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 25px;
  font-size: 14px;
  font-weight: 400;
  color: #7f7f7f;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  margin: 20px 0px;
  margin-left: 22px;
  cursor: pointer;
`;

const Input = styled.input`
  margin: 5px 0px;
  margin-left: 22px;
  display: flex;
  align-items: center;
  width: 40px;
  height: 15px;
  border: 0;
  outline: 0;
  text-align: center;
  border-bottom: 1px solid #cccccc;
  &::placeholder {
    color: #7f7f7f;
  }
`;

const Percent = styled.div`
  color: #7f7f7f;
  margin: 5px 0px;
`;
