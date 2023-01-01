import { useEffect, useRef } from "react"
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import styled from "styled-components"
import { ModalAtom, TechModalAtom } from "../../Store/atom";
import user from "../../Utils/api/Modal"

const MojipModal = () => {
    const { data, isLoading } = useQuery(["myTech"], user.getTech);
    const ModalCheck = useRef<HTMLDivElement>(null);
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

    return (
        <>
            <Background
                ref={ModalCheck}
                onClick={(e) => {
                    if (ModalCheck.current === e.target) {
                        setTechModalBool(false);
                    }
                }}
            >
                <Container>
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
    padding: 50px;
    height: 50vh;
    margin: auto;
    margin-top: 240px;
    overflow: scroll;
    border-radius: 10px;
    background-color: white;
`