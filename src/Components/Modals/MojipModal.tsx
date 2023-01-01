import { useEffect, useRef } from "react"
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import styled from "styled-components"
import { ModalAtom } from "../../Store/atom";
import user from "../../Utils/api/Modal"

const MojipModal = () => {
    const { data, isLoading } = useQuery(["myInfo"], user.getMyInfo);
    const ModalCheck = useRef<HTMLDivElement>(null);
    const changeModalState = useSetRecoilState(ModalAtom);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    if (isLoading) {
        return <h2>Loading</h2>
    }

    const SignInModalDown = () => {
        console.log(1)
        changeModalState("");
    };

    return (
        <>
            <Background
                ref={ModalCheck}
                onClick={(e) => {
                    if (ModalCheck.current === e.target) {
                        SignInModalDown();
                    }
                }}
            >
                <Container>
                    <BigWrapper>
                        <h2>채용직무<span style={{ color: "#0087FF" }}> *</span></h2>
                        <ContentsText>아래 제시된 분야중 해당하는 분야를 선택하세요.</ContentsText>
                        <SmallWrapper>
                            <FieldTitleWrapper>
                                <FieldTitle>웹프로그래밍</FieldTitle>
                                <FieldTitle>모바일</FieldTitle>
                                <FieldTitle>게임</FieldTitle>
                                <FieldTitle>임베디드</FieldTitle>
                                <FieldTitle>보안</FieldTitle>
                                <FieldTitle>인공지능</FieldTitle>
                                <FieldTitle>응용프로그래밍</FieldTitle>
                                <FieldTitle>기타</FieldTitle>
                            </FieldTitleWrapper>
                            <div>
                                <FieldWrapper>
                                    <Field>
                                        <JobCard>웹 프론트엔드</JobCard>
                                        <JobCard>백엔드</JobCard>
                                        <JobCard>풀스택</JobCard>
                                    </Field>
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Field>
                                        <JobCard>안드로이드</JobCard>
                                        <JobCard>iOS</JobCard>
                                    </Field>
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Field>
                                        <JobCard>프론트</JobCard>
                                        <JobCard>서버</JobCard>
                                        <JobCard>기획</JobCard>
                                    </Field>
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Field>
                                        <JobCard>임베디드프로그래밍</JobCard>
                                        <JobCard>시스템프로그래밍</JobCard>
                                    </Field>
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Field>
                                        <JobCard>보안프로그래밍</JobCard>
                                        <JobCard>모의해킹</JobCard>
                                    </Field>
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Field>
                                        <JobCard>인공지능</JobCard>
                                        <JobCard>빅데이터</JobCard>
                                    </Field>
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Field>
                                        <JobCard>윈도우프로그래밍</JobCard>
                                        <JobCard>시스템프로그래밍</JobCard>
                                    </Field>
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Field>
                                        <JobCard>블록체인</JobCard>
                                        <JobCard>NFC</JobCard>
                                    </Field>
                                </FieldWrapper>
                            </div>
                        </SmallWrapper>
                    </BigWrapper>
                    <BigWrapper>
                        <h2>사용기술<span style={{ color: "#0087FF" }}> *</span></h2>
                        <ContentsText>필요한 기술 스택을 추가하세요.</ContentsText>
                    </BigWrapper>
                    <BigWrapper>
                        <h2>채용인원<span style={{ color: "#0087FF" }}> *</span></h2>
                        <ContentsText>채용할 인원을 입력해주세요.</ContentsText>
                        <SmallWrapper>
                            <NumInput type="number" min={0} />
                            <NumText>명</NumText>
                        </SmallWrapper>
                    </BigWrapper>
                    <BigWrapper>
                        <h2>상세직무<span style={{ color: "#0087FF" }}> *</span></h2>
                        <ContentsText>해당 직무에서 하는 일을 상세하게 입력해주세요.</ContentsText>
                        <SmallWrapper>
                            <Textarea />
                        </SmallWrapper>
                    </BigWrapper>
                    <BtnWrapper>
                        <CancleBtn>취소</CancleBtn>
                        <SuccessBtn>확인</SuccessBtn>
                    </BtnWrapper>
                </Container>
            </Background>
        </>
    )
}

export default MojipModal

const Background = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99;
`;

const Container = styled.div`
    border: 3px solid white;
    width: 700px;
    padding: 50px;
    height: 80vh;
    margin: auto;
    margin-top: 120px;
    overflow: scroll;
    border-radius: 10px;
    background-color: white;
`

const BigWrapper = styled.div`
    margin-bottom: 80px;
`

const SmallWrapper = styled.div`
    display: flex;
    margin-left: 60px;
    align-items: center;
`

const Field = styled.div`
    margin-left: 40px;
`

const FieldTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 19px;
`

const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const CancleBtn = styled.button`
    background: #FFFFFF;
    border: 1.5px solid #0F4C82;
    color: #0F4C82;
    border-radius: 3px;
    width: 93px;
    height: 40px;
    margin-right: 15px;
`

const SuccessBtn = styled.button`
    background: #FFFFFF;
    border: 1.5px solid #0F4C82;
    background-color: #0F4C82;
    color: white;
    border-radius: 3px;
    width: 93px;
    height: 40px;
`

const FieldTitle = styled.h3`
    height: 39px;
    margin: 15px 0px;
`

const NumInput = styled.input`
    border: none;
    border-bottom: 1px solid #CCCCCC;
    width: 85px;
    height: 35px;
    padding: 10px;
    outline: none;
`

const Textarea = styled.textarea`
    border: none;
    border-bottom: 1px solid #CCCCCC;
    width: 450px;
    height: 70px;
    padding: 10px;
    outline: none;
    resize: none;
`

const NumText = styled.div`
    color: black;
    font-weight: 400;
    margin-top: 6px;
`

const JobCard = styled.button`
    height: 39px;
    padding: 0px 20px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin-right: 10px;
    border: none;
    background-color: white;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: black;
`

const FieldWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 0px;
`

const ContentsText = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #7F7F7F;
    margin: 10px 0px 0px 40px;
`