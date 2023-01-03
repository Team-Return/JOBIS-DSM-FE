import { useRecoilState } from "recoil";
import styled from "styled-components";
import cancelImg from "../../Assets/cancelImg.png";
import { GatherFieldAtom, IGatherField } from "../../Store/atom";
import { recruitmentCompany } from "../../Store/requirement";

const GatherFieldBox = ({ index, field, tech, people, work }: IGatherField) => {
  const [recruitment, setRecruitment] = useRecoilState(recruitmentCompany);
  const [gatherField, setGatherField] = useRecoilState(GatherFieldAtom);

  return (
    <Container>
      <Title>분야: {field?.map((res) => res.keyword + " ")}</Title>
      <SubTitle>사용기술 : {tech?.map((res) => res.keyword + " ")}</SubTitle>
      <SubTitle style={{ top: 70 }}>주요 업무 : {work}</SubTitle>
      <PeopleCount>{people}명</PeopleCount>
      <CancelImg
        onClick={() => setGatherField(gatherField.filter((res, i) => index !== i))}
        src={cancelImg}
      ></CancelImg>
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
  cursor: pointer;
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
