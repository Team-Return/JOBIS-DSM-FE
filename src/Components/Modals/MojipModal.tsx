import { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { FieldAtom, GatherFieldAtom, ModalAtom, TechAtom, TechModalAtom, techAndFieldType } from "../../Store/atom";
import user from "../../Utils/api/Modal";
import PlusCard from "../../Assets/PlusCard.svg";
import useInput from "../../Hooks/useInput";
import { recruitmentCompany } from "../../Store/requirement";
import * as _ from "./Modal.style"

const MojipModal = () => {
    const { data, isLoading } = useQuery(["myJob"], user.getJob);
    const ModalCheck = useRef<HTMLDivElement>(null);
    const changeModalState = useSetRecoilState(ModalAtom);
    const [Tech, setTech] = useRecoilState(TechAtom);
    const setTechModalBool = useSetRecoilState(TechModalAtom);
    const [field, setField] = useRecoilState(FieldAtom);
    const [gatherField, setGatherField] = useRecoilState(GatherFieldAtom);
    const setIsModal = useSetRecoilState(ModalAtom);
    const [people, onChangePeople] = useInput();
    const [content, onChangeContent] = useInput();
    const [recruitment, setRecruitment] = useRecoilState(recruitmentCompany);

    const CheckArray = (fieldField: techAndFieldType) => {
        (field.filter((datas) => datas.code === fieldField.code).length ? true : false)
            ? DeleteFieldArray(fieldField.code)
            : PushFieldArray(fieldField);
    };

    const DeleteFieldArray = (code: number) => {
        setField(field.filter((datas) => datas.code !== code));
    };

    const DeleteTechArray = (code: number) => {
        setTech(Tech.filter((datas) => datas.code !== code));
    };

    const PushFieldArray = (fieldField: techAndFieldType) => {
        setField([...field, fieldField]);
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    if (isLoading) {
        return <h2>Loading</h2>;
    }

    const modalDown = () => {
        changeModalState("");
    };

    const confirm = () => {
        setGatherField([...gatherField, { field: field, tech: Tech, people: parseInt(people), work: content }]);
        const way = {
            job: field.map((response) => response.code),
            tech: Tech.map((response) => response.code),
            hiring: parseInt(people),
            major_task: content,
        };
        setRecruitment({ ...recruitment, areas: [...recruitment.areas, way] });
        setIsModal("");
        setField([]);
        setTech([]);
    };

    return (
        <>
            <_.Background
                ref={ModalCheck}
                onClick={(e) => {
                    if (ModalCheck.current === e.target) {
                        modalDown();
                    }
                }}
                zIndex={101}
            >
                <_.MojipContainer>
                    <_.BigWrapper>
                        <h2>
                            채용직무<span style={{ color: "#0087FF" }}> *</span>
                        </h2>
                        <_.MojipContentsText>아래 제시된 분야중 해당하는 분야를 선택하세요.</_.MojipContentsText>
                        <_.SmallWrapper>
                            <_.FieldTitleWrapper>
                                <_.FieldTitle>웹프로그래밍</_.FieldTitle>
                                <_.FieldTitle>모바일</_.FieldTitle>
                                <_.FieldTitle>게임</_.FieldTitle>
                                <_.FieldTitle>임베디드</_.FieldTitle>
                                <_.FieldTitle>보안</_.FieldTitle>
                                <_.FieldTitle>인공지능</_.FieldTitle>
                                <_.FieldTitle>응용프로그래밍</_.FieldTitle>
                            </_.FieldTitleWrapper>
                            <div>
                                <_.FieldWrapper>
                                    <_.Field>
                                        {data?.data
                                            .filter((res: any) => res.job_type === "WEB")
                                            .map((res: any) => {
                                                const fieldField : techAndFieldType = {
                                                    code: res.code,
                                                    keyword: res.keyword,
                                                };
                                                return (
                                                    <_.JobCard
                                                        colorBool={field.filter((datas) => datas.code === res.code).length ? true : false}
                                                        onClick={() => CheckArray(fieldField)}
                                                    >
                                                        {res.keyword}
                                                    </_.JobCard>
                                                );
                                            })}
                                    </_.Field>
                                </_.FieldWrapper>
                                <_.FieldWrapper>
                                    <_.Field>
                                        {data?.data
                                            .filter((res: any) => res.job_type === "APP")
                                            .map((res: any) => {
                                                const fieldField : techAndFieldType = {
                                                    code: res.code,
                                                    keyword: res.keyword,
                                                };
                                                return (
                                                    <_.JobCard
                                                        colorBool={field.filter((datas) => datas.code === res.code).length ? true : false}
                                                        onClick={() => CheckArray(fieldField)}
                                                    >
                                                        {res.keyword}
                                                    </_.JobCard>
                                                );
                                            })}
                                    </_.Field>
                                </_.FieldWrapper>
                                <_.FieldWrapper>
                                    <_.Field>
                                        {data?.data
                                            .filter((res: any) => res.job_type === "GAME")
                                            .slice(0, 3)
                                            .map((res: any) => {
                                                const fieldField : techAndFieldType = {
                                                    code: res.code,
                                                    keyword: res.keyword,
                                                };
                                                return (
                                                    <_.JobCard
                                                        colorBool={field.filter((datas) => datas.code === res.code).length ? true : false}
                                                        onClick={() => CheckArray(fieldField)}
                                                    >
                                                        {res.keyword}
                                                    </_.JobCard>
                                                );
                                            })}
                                    </_.Field>
                                </_.FieldWrapper>
                                <_.FieldWrapper>
                                    <_.Field>
                                        {data?.data
                                            .filter((res: any) => res.job_type === "EMBEDDED")
                                            .map((res: any) => {
                                                const fieldField : techAndFieldType = {
                                                    code: res.code,
                                                    keyword: res.keyword,
                                                };
                                                return (
                                                    <_.JobCard
                                                        colorBool={field.filter((datas) => datas.code === res.code).length ? true : false}
                                                        onClick={() => CheckArray(fieldField)}
                                                    >
                                                        {res.keyword}
                                                    </_.JobCard>
                                                );
                                            })}
                                    </_.Field>
                                </_.FieldWrapper>
                                <_.FieldWrapper>
                                    <_.Field>
                                        {data?.data
                                            .filter((res: any) => res.job_type === "SECURITY")
                                            .map((res: any) => {
                                                const fieldField : techAndFieldType = {
                                                    code: res.code,
                                                    keyword: res.keyword,
                                                };
                                                return (
                                                    <_.JobCard
                                                        colorBool={field.filter((datas) => datas.code === res.code).length ? true : false}
                                                        onClick={() => CheckArray(fieldField)}
                                                    >
                                                        {res.keyword}
                                                    </_.JobCard>
                                                );
                                            })}
                                    </_.Field>
                                </_.FieldWrapper>
                                <_.FieldWrapper>
                                    <_.Field>
                                        {data?.data
                                            .filter((res: any) => res.job_type === "AI")
                                            .map((res: any) => {
                                                const fieldField : techAndFieldType = {
                                                    code: res.code,
                                                    keyword: res.keyword,
                                                };
                                                return (
                                                    <_.JobCard
                                                        colorBool={field.filter((datas) => datas.code === res.code).length ? true : false}
                                                        onClick={() => CheckArray(fieldField)}
                                                    >
                                                        {res.keyword}
                                                    </_.JobCard>
                                                );
                                            })}
                                    </_.Field>
                                </_.FieldWrapper>
                                <_.FieldWrapper>
                                    <_.Field>
                                        {data?.data
                                            .filter((res: any) => res.job_type === "ASD")
                                            .map((res: any) => {
                                                const fieldField : techAndFieldType = {
                                                    code: res.code,
                                                    keyword: res.keyword,
                                                };
                                                return (
                                                    <_.JobCard
                                                        colorBool={field.filter((datas) => datas.code === res.code).length ? true : false}
                                                        onClick={() => CheckArray(fieldField)}
                                                    >
                                                        {res.keyword}
                                                    </_.JobCard>
                                                );
                                            })}
                                    </_.Field>
                                </_.FieldWrapper>
                            </div>
                        </_.SmallWrapper>
                    </_.BigWrapper>
                    <_.BigWrapper>
                        <h2>
                            사용기술<span style={{ color: "#0087FF" }}> *</span>
                        </h2>
                        <_.MojipContentsText>필요한 기술 스택을 추가하세요.</_.MojipContentsText>
                        <_.CardWrapper>
                            {Tech.map((res, i) => {
                                return (
                                    <>
                                        <_.Card key={i}>
                                            {res.keyword}
                                            <_.XText onClick={() => DeleteTechArray(res.code)}>x</_.XText>
                                        </_.Card>
                                    </>
                                );
                            })}
                            <_.PlusCardImg
                                src={PlusCard}
                                onClick={() => {
                                    setTechModalBool(true);
                                }}
                            />
                        </_.CardWrapper>
                    </_.BigWrapper>
                    <_.BigWrapper>
                        <h2>
                            채용인원<span style={{ color: "#0087FF" }}> *</span>
                        </h2>
                        <_.MojipContentsText>채용할 인원을 입력해주세요.</_.MojipContentsText>
                        <_.SmallWrapper>
                            <_.NumInput type="number" onChange={onChangePeople} min={0} />
                            <_.NumText>명</_.NumText>
                        </_.SmallWrapper>
                    </_.BigWrapper>
                    <_.BigWrapper>
                        <h2>
                            상세직무<span style={{ color: "#0087FF" }}> *</span>
                        </h2>
                        <_.MojipContentsText>해당 직무에서 하는 일을 상세하게 입력해주세요.</_.MojipContentsText>
                        <_.SmallWrapper>
                            <_.Textarea onChange={onChangeContent} />
                        </_.SmallWrapper>
                    </_.BigWrapper>
                    <_.BtnWrapper>
                        <_.WhiteBtn onClick={modalDown}>취소</_.WhiteBtn>
                        <_.BlueBtn onClick={confirm}>확인</_.BlueBtn>
                    </_.BtnWrapper>
                </_.MojipContainer>
            </_.Background>
        </>
    );
};

export default MojipModal