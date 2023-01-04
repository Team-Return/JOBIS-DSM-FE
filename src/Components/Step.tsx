import styled from "styled-components";
import { BlueStar } from "./BlueStar";
import Field from "./Register/Field";
import GatherDate from "./Register/모집년도";
import MustHave from "./Register/필수사항";
import CheckBox from "./Register/CheckBox";
import 모집날짜 from "./Register/모집날짜";
import HiringProcess from "./Register/채용절차";
import { useRecoilState } from "recoil";
import React from "react";
import { recruitmentCompany } from "../Store/requirement";

export interface IStep {
  title: string;
  content?: string[];
  star?: boolean;
  enter?: boolean;
  placeholder?: string[];
}

const Step = ({ title, content, star, enter, placeholder }: IStep) => {
  const [recruitment, setRecruitment] = useRecoilState(recruitmentCompany);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRecruitment({ ...recruitment, [name]: value });
  };

  const onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, "");
    setRecruitment({ ...recruitment, [name]: parseInt(onlyNumber) });
  };

  const Component = (title: string, content: string) => {
    switch (title) {
      case "모집년도":
        return [<GatherDate />];
      case "모집분야":
        return [<Field />];
      case "자격요건":
        switch (content) {
          case "우대사항":
            return [
              <div style={{ marginLeft: 71 }}>
                <TextArea name="preferential_treatment" onChange={onChange} />
              </div>,
            ];
          case "필수사항":
            return [<MustHave />];
        }
        break;
      case "근무조건":
        switch (content) {
          case "근무 시간":
            return [
              <BlueStar>*</BlueStar>,
              <LineComponent
                name="work_hours"
                onChange={onChangeNumber}
                value={recruitment.work_hours || ""}
                placeholder="시간"
              />,
            ];
          case "실습 수당":
            return [
              <BlueStar>*</BlueStar>,
              <LineComponent
                name="train_pay"
                onChange={onChangeNumber}
                value={recruitment.train_pay || ""}
                placeholder="만원/월"
              />,
            ];
          case "정규직 전환시":
            return [
              <LineComponent
                name="pay"
                value={recruitment.pay || ""}
                onChange={onChangeNumber}
                placeholder="만원/년"
              />,
            ];
          case "복리후생":
            return [
              <div style={{ marginLeft: 71 }}>
                <TextArea name="benefits" onChange={onChange} />
                <CheckBox title="병역특례 신청" />
              </div>,
            ];
        }
        break;
      case "채용조건":
        switch (content) {
          case "채용 절차":
            return [<BlueStar>*</BlueStar>, <HiringProcess />];
          case "제출 서류":
            return [
              <BlueStar>*</BlueStar>,
              <LineComponent name="submit_document" onChange={onChange} placeholder={title} />,
            ];
          case "모집 기간":
            return [<BlueStar>*</BlueStar>, <모집날짜 />];
          case "기타 사항":
            return [
              <div style={{ marginLeft: 67 }}>
                <TextArea name="etc" onChange={onChange} />
                {/* <CheckBox title="개인 컨택 여부" /> */}
              </div>,
            ];
        }
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Line></Line>
      <Phrases>
        <div>
          {content?.map((res, i) => {
            return (
              <Wrapper>
                <Content key={i}>{res}</Content>
                {star && <BlueStar>*</BlueStar>}
                {Component(title, res)}
              </Wrapper>
            );
          })}
        </div>
      </Phrases>
    </Container>
  );
};

export default Step;

const Container = styled.div`
  width: 550px;
  min-height: 230px;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: left;
`;
const Line = styled.div`
  margin-top: 13px;
  border: 1px solid black;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Phrases = styled.div`
  position: relative;
  display: flex;
  margin-top: 30px;
  font-size: 14px;
  font-weight: 350;
`;

const Content = styled.div`
  margin-bottom: 40px;
`;

const LineComponent = styled.input`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  width: 430px;
  height: 20px;
  padding-bottom: 7px;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #cccccc;
  padding-left: 15px;
  &::placeholder {
    color: #7f7f7f;
  }
`;

const TextArea = styled.textarea`
  width: 430px;
  height: 55px;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #cccccc;
  resize: none;
  margin-bottom: 10px;
  padding-left: 5px;
`;
