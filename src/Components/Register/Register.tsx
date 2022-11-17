import styled from "styled-components";
import { BlueStar } from "../BlueStar";
import Step, { IStep } from "../Step";

const Register = () => {
  const hello: IStep[] = [
    { title: "모집년도", content: ["모집년도"], star: true },
    { title: "모집분야", content: ["문구"] },
    { title: "자격요건", content: ["우대사항", "필수사항"] },
    { title: "근무조건", content: ["근무 시간(시간)", "실습 수당(만원/월)", "정규직 전환시(연봉)", "복리후생"] },
    { title: "채용조건", content: ["채용절차", "제출서류"] },
  ];

  return (
    <Container>
      <Title>모집의뢰서 등록</Title>
      <SubTitle>
        등록된 정보는 본 시스템을 통해 접수된 건에 한하여 정식적으로 검토되며 등록된 정보는 서비스 이용에 활용됩니다.
      </SubTitle>
      <RequireText>
        <BlueStar>*</BlueStar> 표시는 필수 입력 항목입니다.
      </RequireText>
      <Steps>
        {hello.map((res, i) => {
          const { title, star, content } = res;
          return <Step key={i} title={title} star={star} content={content}></Step>;
        })}
      </Steps>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  height: 2000px;
  margin-top: 130px;
  margin-bottom: 80px;
  z-index: 99;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 650;
  margin-top: 80px;
`;

const SubTitle = styled.div`
  text-align: center;
  width: 460px;
  font-size: 16px;
  font-weight: 400;
  margin-top: 15px;
`;

const RequireText = styled.div`
  display: flex;
  margin-top: 50px;
  width: 550px;
  text-align: left;
  font-size: 14px;
  color: #7f7f7f;
  font-weight: 400;
`;

const Steps = styled.div`
  width: 550px;
  margin-top: 40px;
`;
