import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import Background from "../Components/Background/Background";
import Certificate from "../Components/Register/CertificateModal";
import RecruitmentMethod from "../Components/Register/RecruitmentMethodModal";
import Register from "../Components/Register/Register";
import { isModalAtom, modalTypeAtom } from "../Store/modal";
import { recruitmentCompany } from "../Store/requirement";

const SignUp = () => {
  const isModal = useRecoilValue(isModalAtom);
  const [modalType, setModalType] = useRecoilState(modalTypeAtom);
  const [recruitment, setRecruitment] = useRecoilState(recruitmentCompany);

  useEffect(() => {
    console.log(recruitment);
  }, []);

  const Modal = () => {
    switch (modalType) {
      case "none":
        return;
      case "progress":
        return <RecruitmentMethod />;
      case "certificate":
        return <Certificate />;
    }
  };

  return (
    <Container>
      <Background></Background>
      <Register></Register>
      {isModal && Modal()}
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`;
