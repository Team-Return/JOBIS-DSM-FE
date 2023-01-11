import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { TechAtom, TechModalAtom, techAndFieldType } from "../../Store/atom";
import user from "../../Utils/api/Modal";
import SearchBtn from "../../Assets/Search_btn.svg";
import * as _ from "./Modal.style"

const MojipModal = () => {
    const { data, isLoading } = useQuery(["myTech"], user.getTech);
    const [Tech, setTech] = useRecoilState(TechAtom);
    const [search, setSearch] = useState("");
    const setTechModalBool = useSetRecoilState(TechModalAtom);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    if (isLoading) {
        return <h2>Loading</h2>;
    }

    const CheckArray = (techTech: techAndFieldType) => {
        (Tech.filter((datas) => datas.code === techTech.code).length ? true : false)
            ? DeleteTechArray(techTech.code)
            : PushTechArray(techTech);
    };

    const DeleteTechArray = (code: number) => {
        setTech(Tech.filter((datas) => datas.code !== code));
    };

    const PushTechArray = (techTech: techAndFieldType) => {
        setTech([...Tech, techTech]);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <>
            <_.Background zIndex={102}>
                <_.TechContainer>
                    <_.PageXText
                        onClick={() => {
                            setTechModalBool(false);
                        }}
                    >
                        x
                    </_.PageXText>
                    <_.FirstWrapper>
                        <div>
                            <h2>사용기술 선택</h2>
                            <_.TechContentsText>해당 직무에 필요한 기술을 선택하세요.</_.TechContentsText>
                        </div>
                        <div>
                            <_.SearchInput type="text" value={search} onChange={onChange} />
                            <_.SearchBtnImg src={SearchBtn}></_.SearchBtnImg>
                        </div>
                    </_.FirstWrapper>
                    <_.SmallCardWrapper>
                        {Tech.map((res, i) => {
                            return (
                                <>
                                    <_.SmallCard key={i}>
                                        {res.keyword}
                                        <_.XText onClick={() => DeleteTechArray(res.code)}>x</_.XText>
                                    </_.SmallCard>
                                </>
                            );
                        })}
                    </_.SmallCardWrapper>
                    <_.BigCardWrapper>
                        {data?.data
                            .filter((datas: any) => {
                                return datas.keyword.includes(search);
                            })
                            .map((res: any, i: number) => {
                                const techTech = {
                                    code: res.code,
                                    keyword: res.keyword,
                                };
                                return (
                                    <>
                                        <_.BigCard
                                            key={i}
                                            colorBool={Tech.filter((datas) => datas.code === res.code).length ? true : false}
                                            onClick={() => {
                                                CheckArray(techTech);
                                            }}
                                        >
                                            {res.keyword}
                                        </_.BigCard>
                                    </>
                                );
                            })}
                    </_.BigCardWrapper>
                    <_.WhiteBtn
                        onClick={() => {
                            setTechModalBool(false);
                        }}
                    >
                        완료
                    </_.WhiteBtn>
                </_.TechContainer>
            </_.Background>
        </>
    );
};

export default MojipModal;