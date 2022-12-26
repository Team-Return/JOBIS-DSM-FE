import styled from "styled-components";
import { BlueStar } from "./BlueStar";
import Field from "./Register/Field";
import GatherDate from "./Register/모집년도";
import LineComponent from "./Register/선";
import TextArea from "./Register/TextArea";
import MustHave from "./Register/필수사항";
import CheckBox from "./Register/CheckBox";
import 모집날짜 from "./Register/모집날짜";
import HiringProcess from "./Register/채용절차";
import GatherFieldBox from "./Register/모집분야박스";

export interface IStep {
  title: string;
  content?: string[];
  star?: boolean;
  enter?: boolean;
  placeholder?: string[];
}

const Step = ({ title, content, star, enter, placeholder }: IStep) => {
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
                <TextArea />
              </div>,
            ];
          case "필수사항":
            return [<MustHave />];
        }
        break;
      case "근무조건":
        switch (content) {
          case "근무 시간":
            return [<BlueStar>*</BlueStar>, <LineComponent title={"시간"} />];
          case "실습 수당":
            return [<BlueStar>*</BlueStar>, <LineComponent title={"만원/월"} />];
          case "정규직 전환시":
            return [<LineComponent title={"만원/년"} />];
          case "복리후생":
            return [
              <div style={{ marginLeft: 71 }}>
                <TextArea />
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
            return [<BlueStar>*</BlueStar>, <LineComponent title={""} />];
          case "모집 기간":
            return [<BlueStar>*</BlueStar>, <모집날짜 />];
          case "기타 사항":
            return [
              <div style={{ marginLeft: 67 }}>
                <TextArea />
                <CheckBox title="개인 컨택 여부" />
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
