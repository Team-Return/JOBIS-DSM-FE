import styled from "styled-components";
import { BlueStar } from "./BlueStar";
import GatherDate from "./Register/GatherDate";

export interface IStep {
  title: string;
  content?: string[];
  star?: boolean;
}

const Step = ({ title, content, star }: IStep) => {
  const Component = (title: string) => {
    switch (title) {
      case "모집년도":
        return <GatherDate />;
      case "모집분야":
      case "자격요건":
      case "근무조건":
      case "채용조건":
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Line></Line>
      <Phrases>
        <div>
          {content?.map((res, i) => {
            return <Content key={i}>{res}</Content>;
          })}
        </div>
        {star && <BlueStar>*</BlueStar>}
        {Component(title)}
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
