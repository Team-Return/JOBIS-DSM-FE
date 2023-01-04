import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { recruitmentCompany } from "../../Store/requirement";

const CheckBox = ({ isCheck, title }: { isCheck?: boolean; title: string }) => {
  const [recruitment, setRecruitment] = useRecoilState(recruitmentCompany);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (title === "병역특례 신청") setRecruitment({ ...recruitment, military: e.target.checked });
  };

  return (
    <Wrapper>
      <Input
        style={{ cursor: title === "병역특례 신청" ? "default" : "not-allowed" }}
        checked={isCheck}
        onChange={onChange}
        type="checkbox"
      />
      <Text>{title}</Text>
    </Wrapper>
  );
};

export default CheckBox;

const Wrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid #dedede;
  margin-right: 10px;
`;

const Text = styled.div`
  margin: 5px 0px;
`;
