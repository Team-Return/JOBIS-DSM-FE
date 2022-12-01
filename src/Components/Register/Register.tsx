import styled from "styled-components";
import { BlueStar } from "../BlueStar";
import Step, { IStep } from "../Step";

const Register = () => {
  const gather: IStep[] = [
    { title: "모집년도", content: ["모집년도"], star: true },
    { title: "모집분야", content: ["어쩌고 저쩌고 대충 문구 들어갈 자리"], enter: true },
    { title: "자격요건", content: ["우대사항", "필수사항"] },
    { title: "근무조건", content: ["근무 시간", "실습 수당", "정규직 전환시", "복리후생"] },
    { title: "채용조건", content: ["채용 절차", "제출 서류", "모집 기간", "기타 사항"] },
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
        {gather.map((res, i) => {
          const { title, star, content } = res;
          return <Step key={i} title={title} star={star} content={content}></Step>;
        })}
        {/* <Step title="모집년도" content={["모집년도"]} star={true} /> */}
      </Steps>
      <Display>
        <CancelButton>취소</CancelButton>
        <ConfirmRequestButton>의뢰서 작성 완료</ConfirmRequestButton>
      </Display>
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
  min-height: 2000px;
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

const Display = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 60px;
`;

const CancelButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border: 1.5px solid #0f4c82;
  border-radius: 3px;
  color: #0f4c82;
  font-weight: 400;
  cursor: pointer;
`;

const ConfirmRequestButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  border-radius: 3px;
  background-color: #0f4c82;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;
