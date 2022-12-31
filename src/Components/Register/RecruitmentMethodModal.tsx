import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import useInput from "../../Hooks/useInput";
import { methods, processAtom } from "../../Store/Methods";
import { isModalAtom } from "../../Store/modal";
import { recruitmentCompany } from "../../Store/requirement";

const RecruitmentMethod = () => {
  const EventBubbling = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };
  const [isModal, setIsModal] = useRecoilState(isModalAtom);
  const [recruitment, setRecruitment] = useRecoilState(recruitmentCompany);
  const [content, onChangeContent, setContent] = useInput();

  const init = useRef<HTMLInputElement>(null);

  useEffect(() => {
    init.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const Submit = () => {
    setRecruitment({ ...recruitment, required_licenses: [...recruitment.required_licenses, content] });
    setIsModal(false);
  };

  const Enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") Submit();
  };

  return (
    <Container onClick={() => setIsModal(false)}>
      <Background onClick={EventBubbling}>
        <Input ref={init} onKeyDown={Enter} onChange={onChangeContent} placeholder="자격증을 입력해주세요." />
        <Button onClick={Submit}>완료</Button>
      </Background>
    </Container>
  );
};

export default RecruitmentMethod;

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
  align-items: center;
  width: 450px;
  height: 200px;
  background-color: white;
`;

const Input = styled.input`
  width: 350px;
  height: 50px;
  border-radius: 10px;
  border: 0;
  outline: 0;
  padding: 0px 10px;
  font-size: 20px;
  border: 2px solid gray;
  ::placeholder {
    font-size: 16px;
    color: #7f7f7f7f;
  }
`;
const Button = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  height: 50px;
  width: 70px;
  background-color: black;
  right: 40px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;
