import styled from "styled-components";
import cancelImg from "../../Assets/cancelImg.png";

const GatherFieldBox = () => {
  return (
    <Container>
      <Title>분야: 프론트엔드/백엔드</Title>
      <SubTitle>사용기술 : Javascript, HTML, CSS, Next.js, React</SubTitle>
      <SubTitle style={{ top: 70 }}>주요 업무 : 리액트를 이용한 프론트 개발</SubTitle>
      <PeopleCount>1명</PeopleCount>
      <CancelImg src={cancelImg}></CancelImg>
    </Container>
  );
};

export default GatherFieldBox;

const Container = styled.div`
  position: relative;
  width: 550px;
  height: 100px;
  background: #fdfdfd;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
`;

const CancelImg = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 10px;
  height: 10px;
`;

const Title = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
  font-size: 16px;
  font-weight: 500;
`;

const SubTitle = styled.div`
  position: absolute;
  font-size: 14px;
  color: #555555;
  left: 30px;
  top: 50px;
`;

const PeopleCount = styled.div`
  position: absolute;
  top: 35px;
  right: 45px;
  font-size: 30px;
  font-weight: 700;
`;
