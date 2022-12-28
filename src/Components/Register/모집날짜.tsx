import { useState } from "react";
import styled from "styled-components";
import Calendar from "../../Assets/Calendar.svg";

const 모집날짜 = () => {
  const [date, setDate] = useState<number>(2022);

  return (
    <Container>
      <Input type="date" />
      <Text>~</Text>
      <Text>2022.11.23</Text>
      <Img src={Calendar} alt="달력" />
    </Container>
  );
};
export default 모집날짜;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  width: 430px;
  height: 30px;
  border-bottom: 1px solid #cccccc;
`;

const Text = styled.div`
  color: #7f7f7f;
  margin-left: 15px;
`;

const Img = styled.img`
  width: 15px;
  margin-left: 10px;
  margin-bottom: 3px;
  cursor: pointer;
`;

const Input = styled.input`
  outline: 0;
  border: 0;
  color: #7f7f7f;
`;
