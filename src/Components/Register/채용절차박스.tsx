import cancelImg from "../../Assets/cancelImg.png";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { methods, processAtom } from "../../Store/Methods";

const HiringBox = ({ index, name, id }: { index: number; name: string; id: number }) => {
  const [method, setMethod] = useRecoilState(methods);
  const [process, setProcess] = useRecoilState(processAtom);

  const deleteBox = () => {
    setMethod(method.map((user: any) => (user.id === id ? { ...user, isSelect: false } : user)));
    setProcess(process.filter((user: any) => user.id !== id));
    console.log(process);
  };

  return (
    <Box>
      <Equal>=</Equal>
      <Text>
        {index + 1}. {name}
      </Text>
      <Img onClick={deleteBox} src={cancelImg} />
    </Box>
  );
};

export default HiringBox;

const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 420px;
  height: 45px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  margin-left: 69px;
`;

const Equal = styled.div`
  font-size: 35px;
  font-weight: 330;
  margin-left: 25px;
  color: #7f7f7f;
`;

const Text = styled.div`
  font-size: 15px;
  margin-left: 30px;
  font-weight: 350;
`;

const Img = styled.img`
  position: absolute;
  width: 12px;
  height: 12px;
  right: 30px;
  cursor: pointer;
`;
