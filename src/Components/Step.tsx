import styled from "styled-components";
import { BlueStar } from "./BlueStar";
import Field from "./Register/Field";
import GatherDate from "./Register/GatherDate";
import LineComponent from "./Register/Preferential";

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
        return [<LineComponent title={title} />];
      case "근무조건":
        switch (content) {
          case "근무 시간":
            return [<LineComponent title={"시간"} />];
          case "실습 수당":
            return [<LineComponent title={"만원/월"} />];
          case "정규직 전환시":
            return [<LineComponent title={"만원/년"} />];
        }
        break;
      case "채용조건":
        return [<LineComponent title={title} />];
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Line></Line>
      <Phrases enter={enter}>
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
  margin-bottom: 140px;
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

const Phrases = styled.div<{ enter: boolean | undefined }>`
  position: relative;
  display: flex;
  margin-top: 30px;
  font-size: 14px;
  font-weight: 350;
`;

const Content = styled.div`
  margin-bottom: 40px;
`;
