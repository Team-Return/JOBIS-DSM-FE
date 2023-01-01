import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { methods, processAtom } from "../../Store/Methods";
import { isModalAtom } from "../../Store/modal";
import { recruitmentCompany } from "../../Store/requirement";

const Certificate = () => {
  const EventBubbling = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  const [method, setMethod] = useRecoilState(methods);
  const [process, setProcess] = useRecoilState(processAtom);
  const [isModal, setIsModal] = useRecoilState(isModalAtom);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const Select = (isSelect: boolean, number: number, name: string) => {
    if (!isSelect) {
      setMethod(method.map((way: any) => (way.id === number ? { ...way, isSelect: true } : way)));
      setIsModal(false);
      const way = {
        id: number,
        name,
      };
      setProcess([...process, way]);
      console.log(method);
    }
  };
  return (
    <Container onClick={() => setIsModal(false)}>
      <Background onClick={EventBubbling}>
        <Title>채용 방법 선택</Title>
        <Wrapper>
          {method.map((res, i) => {
            const { isSelect, name } = res;
            return (
              <Card onClick={() => Select(isSelect, i, name)} isSelect={isSelect} key={i}>
                {res.name}
              </Card>
            );
          })}
        </Wrapper>
      </Background>
    </Container>
  );
};

export default Certificate;

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

const Background = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 450px;
  height: 370px;
  background-color: white;
`;

const Title = styled.div`
  position: absolute;
  font-size: 25px;
  font-weight: 600;
  top: 40px;
  left: 35px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 390px;
  height: 240px;
  margin-top: 100px;
  overflow: scroll;
`;

const Card = styled.div<{ isSelect: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #000000;
  background-color: ${(props) => (props.isSelect ? "#F0F0F0" : "white")};
  font-weight: 400;
  width: 130px;
  height: 80px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.isSelect ? null : "#0f4c82")};
    color: ${(props) => (props.isSelect ? null : "white")};
  }
`;
