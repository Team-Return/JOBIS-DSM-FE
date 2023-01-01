import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import add from "../../Assets/addField.svg";
import { ModalAtom } from "../../Store/atom";
import { BlueStar } from "../BlueStar";
import GatherFieldBox from "./모집분야박스";

const Field = () => {
  const setChangeModalValue = useSetRecoilState(ModalAtom);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Boxs>
        <GatherFieldBox />
      </Boxs>
    <Container onClick={() => {setChangeModalValue("Job")}}>
      <Wrapper>
        <img src={add} alt="추가" />
        <Text>추가</Text>
        <BlueStar>*</BlueStar>
      </Wrapper>
    </Container>
   </div>
  );
};

export default Field;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 40px;
  border: 2px dashed #cccccc;
  border-radius: 10px;
  padding: 30px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.div`
  color: #b1b1b1;
  font-size: 16px;
  font-weight: 700;
  margin: 0px 5px;
`;

const Boxs = styled.div`
  margin-bottom: 30px;
`;
