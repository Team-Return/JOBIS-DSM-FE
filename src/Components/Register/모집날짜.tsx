import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Calendar from "../../Assets/Calendar.svg";
import { recruitmentCompany } from "../../Store/requirement";

const 모집날짜 = () => {
  const [recruitment, setRecruitment] = useRecoilState(recruitmentCompany);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRecruitment({ ...recruitment, [name]: value });
    console.log(recruitment);
  };

  return (
    <Container>
      <Input name="start_date" onChange={onChange} value={recruitment.start_date} type="date" />
      <Text>~</Text>
      <Input name="end_date" onChange={onChange} value={recruitment.end_date} style={{ marginLeft: 17 }} type="date" />
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
