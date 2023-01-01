import { useEffect, useState } from "react"
import { useQuery } from "react-query";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components"
import { TechAtom, TechModalAtom } from "../../Store/atom";
import user from "../../Utils/api/Modal"
import SearchBtn from "../../Assets/Search_btn.svg";

const MojipModal = () => {
    const { data, isLoading } = useQuery(["myTech"], user.getTech);
    const [Tech, setTech] = useRecoilState(TechAtom);
    const [search, setSearch] = useState("")
    const setTechModalBool = useSetRecoilState(TechModalAtom)

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    if (isLoading) {
        return <h2>Loading</h2>
    }

    const CheckArray = (techTech: any) => {
        (Tech.filter((datas) => datas.code === techTech.code).length ? true : false) ? DeleteArray(techTech.code) : PushArray(techTech)
    }

    const DeleteArray = (code: number) => {
        setTech(
            Tech.filter((datas) => datas.code !== code)
        )
    }

    const PushArray = (techTech: any) => {
        setTech([
            ...Tech,
            techTech
        ])
    }

    const onChange = (e : any) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <Background>
                <Container>
                    <PageXText onClick={() => { setTechModalBool(false) }}>x</PageXText>
                    <FirstWrapper>
                        <div>
                            <h2>사용기술 선택</h2>
                            <ContentsText>해당 직무에 필요한 기술을 선택하세요.</ContentsText>
                        </div>
                        <div>
                            <SearchInput type="text" value={search} onChange={onChange} />
                            <SearchBtnImg src={SearchBtn}></SearchBtnImg>
                        </div>
                    </FirstWrapper>
                    <SmallCardWrapper>
                        {Tech.map((res, i) => {
                            return (
                                <>
                                    <SmallCard key={i}>{res.keyword}<XCardText onClick={() => DeleteArray(res.code)}>x</XCardText></SmallCard>
                                </>
                            )
                        })}
                    </SmallCardWrapper>
                    <BigCardWrapper>
                        {data?.data.filter((datas : any) => {return datas.keyword.includes(search)}).map((res: any, i: number) => {
                            const techTech = {
                                "code": res.code,
                                "keyword": res.keyword,
                            }
                            return (
                                <>
                                    <BigCard
                                        key={i}
                                        colorBool={(Tech.filter((datas) => datas.code === res.code).length ? true : false)}
                                        onClick={() => { CheckArray(techTech) }}>{res.keyword}</BigCard>
                                </>
                            )
                        })}
                    </BigCardWrapper>
                    <Btn onClick={() => { setTechModalBool(false) }}>완료</Btn>
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
    z-index: 102;
`;

const Container = styled.div`
    border: 3px solid white;
    width: 700px;
    padding: 45px;
    height: 68vh;
    margin: auto;
    margin-top: 160px;
    overflow: scroll;
    border-radius: 10px;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PageXText = styled.div`
    position: absolute;
    right: 18px;
    top: 10px;
    font-size: 25px;
    font-weight: 500;
    cursor: pointer;
`

const SmallCardWrapper = styled.div`
    display: flex;
    overflow: scroll;
    height: 40px;
    width: 580px;
    align-items: center;
    padding-left: 3px;
    margin: 25px 0px;
`

const SmallCard = styled.button`
    border: none;
    padding: 5px 10px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    height: 25px;
    display: flex;
    margin-right: 7px;
    font-size: 14px;
    font-weight: 400;
    color: #7f7f7f;
    outline: none;
`

const XCardText = styled.div`
    margin-left: 7px;
    margin-top: -1px;
    cursor: pointer;
    color: red;
`

const FirstWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 580px;
`

const ContentsText = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #7F7F7F;
    margin-top: 8px;
`

const SearchInput = styled.input`
    background: #EAEAEA;
    border: 0.5px solid #F7F7F7;
    border-radius: 30px;
    width: 250px;
    height: 40px;
    outline: none;
    padding: 10px 50px 10px 20px;
`

const SearchBtnImg = styled.img`
    position: absolute;
    height: 40px;
    margin-left: -40px;
`

const BigCardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 380px;
    width: 600px;
    margin-bottom: 20px;
`

const BigCard = styled.button<{ colorBool: boolean }>`
    border: none;
    width: 114px;
    height: 76px;
    background-color: ${(props) => props.colorBool ? "#0F4C82" : "white"};
    color: ${(props) => props.colorBool ? "white" : "black"};
    font-weight: 350;
    font-size: 16px;
    display: flex;
    margin-right: 5px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    :hover{
        background-color: ${(props) => props.colorBool ? "#0F4C82" : "#F0F0F0"};
        color: ${(props) => props.colorBool ? "white" : "black"};;
    }
`

const Btn = styled.button`
    width: 92px;
    height: 40px;
    border: 1px solid #0F4C82;
    border-radius: 3px;
    background-color: white;
    color: #0F4C82;
    cursor: pointer;
`