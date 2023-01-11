import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { processAtom } from "../../Store/Methods";
import { isModalAtom, modalTypeAtom } from "../../Store/modal";
import HiringBox from "./채용절차박스";

const HiringProcess = () => {
  const setIsModal = useSetRecoilState(isModalAtom);
  const process = useRecoilValue(processAtom);
  const setModalType = useSetRecoilState(modalTypeAtom);

  return (
    <>
      <Button
        onClick={() => {
          setIsModal((prev) => !prev);
          setModalType("certificate");
        }}
      >
        +
      </Button>
      <Boxs>
        {process.map((res, i) => {
          const { id, name } = res;
          return <HiringBox key={id} id={id} index={i} name={name}></HiringBox>;
        })}
      </Boxs>
    </>
  );
};

export default HiringProcess;

const Button = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  border: 1px solid #0f4c82;
  color: #0f4c82;
  width: 75px;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
  background-color: white;
`;

const Boxs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 40px 0;
`;
