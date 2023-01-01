import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isModalAtom, modalTypeAtom } from "../../Store/modal";
import { recruitmentCompany } from "../../Store/requirement";
import CheckBox from "./CheckBox";
import Cancel from "../../Assets/cancelImg.png";

const MustHave = () => {
  const [recruitment, setRecruitment] = useRecoilState(recruitmentCompany);
  const [modalType, setModalType] = useRecoilState(modalTypeAtom);
  const [isModal, setIsModal] = useRecoilState(isModalAtom);

  const onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, "");
    setRecruitment({ ...recruitment, required_grade: parseInt(onlyNumber) });
  };

  const { required_licenses } = recruitment;

  return (
    <Container>
      <CheckBox isCheck={recruitment.required_licenses.length >= 1 ? true : false} title="국가자격증" />
      <Certificates>
        <>
          {required_licenses
            .slice(0)
            .reverse()
            .map((res, i) => {
              return (
                <>
                  <CertificatesList>
                    {res}
                    <CancelImg
                      onClick={() =>
                        setRecruitment({
                          ...recruitment,
                          required_licenses: required_licenses.filter((list: string) => list !== res),
                        })
                      }
                      src={Cancel}
                    />
                  </CertificatesList>
                </>
              );
            })}
        </>
        <Add
          onClick={() => {
            setIsModal(true);
            setModalType("progress");
          }}
        >
          + 추가
        </Add>
      </Certificates>
      <CheckBox isCheck={recruitment.required_grade > 0} title="성적" />
      <Wrapper>
        <Input onChange={onChangeNumber} value={recruitment.required_grade || ""} max={100} min={0} maxLength={3} />
        <Percent>% 이내</Percent>
      </Wrapper>
    </Container>
  );
};

export default MustHave;

const Container = styled.div`
  min-height: 130px;
  margin-bottom: 20px;
  margin-left: 71px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Add = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  height: 25px;
  font-size: 14px;
  font-weight: 400;
  color: #7f7f7f;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  margin: 20px 0px;
  margin-left: 22px;
  cursor: pointer;
  padding: 5px 10px;
`;

const Input = styled.input`
  margin: 5px 0px;
  margin-left: 22px;
  display: flex;
  align-items: center;
  width: 40px;
  height: 15px;
  border: 0;
  outline: 0;
  text-align: center;
  border-bottom: 1px solid #cccccc;
  &::placeholder {
    color: #7f7f7f;
  }
`;

const Percent = styled.div`
  color: #7f7f7f;
  margin: 5px 0px;
`;

const Certificates = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 430px;
`;

const CertificatesList = styled(Add)`
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 30px;
  cursor: auto;
`;

const CancelImg = styled.img`
  position: absolute;
  top: 7px;
  right: 10px;
  width: 8px;
  height: 8px;
  cursor: pointer;
`;
