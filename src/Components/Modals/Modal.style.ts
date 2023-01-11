import styled from "styled-components";

export const Background = styled.div<{ zIndex: number }>`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: ${(props) => props.zIndex};
`;

export const MojipContainer = styled.div`
    border: 3px solid white;
    width: 700px;
    padding: 50px;
    height: 80vh;
    margin: auto;
    margin-top: 120px;
    overflow: scroll;
    border-radius: 10px;
    background-color: white;
`;

export const BigWrapper = styled.div`
    margin-bottom: 80px;
`;

export const CardWrapper = styled.div`
    display: flex;
    overflow: scroll;
    height: 60px;
    width: 490px;
    align-items: center;
    padding-left: 3px;
    margin-left: 50px;
    margin-top: 15px;
    padding-bottom: 15px;
`;

export const Card = styled.button`
    border: none;
    padding: 5px 10px;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    display: flex;
    margin-right: 7px;
    font-size: 14px;
    font-weight: 400;
    color: #7f7f7f;
    outline: none;
    justify-content: center;
    align-items: center;
`;

export const PlusCardImg = styled.img`
    width: 90px;
    height: 30px;
`;

export const XText = styled.div`
    margin-left: 7px;
    margin-top: -1px;
    cursor: pointer;
    color: red;
`;

export const SmallWrapper = styled.div`
    display: flex;
    margin-left: 60px;
    align-items: center;
`;

export const Field = styled.div`
    margin-left: 40px;
`;

export const FieldTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 19px;
`;

export const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const WhiteBtn = styled.button`
    background: #ffffff;
    border: 1.5px solid #0f4c82;
    color: #0f4c82;
    border-radius: 3px;
    width: 93px;
    height: 40px;
    margin-right: 15px;
    cursor: pointer;
`;

export const BlueBtn = styled.button`
    background: #ffffff;
    border: 1.5px solid #0f4c82;
    background-color: #0f4c82;
    color: white;
    border-radius: 3px;
    width: 93px;
    height: 40px;
    cursor: pointer;
`;

export const FieldTitle = styled.h3`
    height: 39px;
    margin: 15px 0px;
`;

export const NumInput = styled.input`
    border: none;
    border-bottom: 1px solid #cccccc;
    width: 85px;
    height: 35px;
    padding: 10px;
    outline: none;
`;

export const Textarea = styled.textarea`
    border: none;
    border-bottom: 1px solid #cccccc;
    width: 450px;
    height: 70px;
    padding: 10px;
    outline: none;
    resize: none;
`;

export const NumText = styled.div`
    color: black;
    font-weight: 400;
    margin-top: 6px;
`;

export const JobCard = styled.button<{ colorBool: boolean }>`
    height: 39px;
    padding: 0px 20px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin-right: 10px;
    border: none;
    background-color: ${(props) => (props.colorBool ? "#0F4C82" : "white")};
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => (props.colorBool ? "white" : "black")};
    cursor: pointer;
`;

export const FieldWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 0px;
`;

export const MojipContentsText = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #7f7f7f;
    margin: 10px 0px 0px 40px;
`;

export const BigCard = styled.button<{ colorBool: boolean }>`
    border: none;
    width: 114px;
    height: 76px;
    background-color: ${(props) => (props.colorBool ? "#0F4C82" : "white")};
    color: ${(props) => (props.colorBool ? "white" : "black")};
    font-weight: 350;
    font-size: 16px;
    display: flex;
    margin-right: 5px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    :hover {
        background-color: ${(props) => (props.colorBool ? "#0F4C82" : "#F0F0F0")};
        color: ${(props) => (props.colorBool ? "white" : "black")};
    }
`;

export const SearchBtnImg = styled.img`
    position: absolute;
    height: 40px;
    margin-left: -40px;
`;

export const BigCardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 380px;
    width: 600px;
    margin-bottom: 20px;
`;

export const TechContainer = styled.div`
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
`;

export const PageXText = styled.div`
    position: absolute;
    right: 18px;
    top: 10px;
    font-size: 25px;
    font-weight: 500;
    cursor: pointer;
`;

export const SmallCardWrapper = styled.div`
    display: flex;
    overflow: scroll;
    height: 40px;
    width: 580px;
    align-items: center;
    padding-left: 3px;
    margin: 25px 0px;
`;

export const SmallCard = styled.button`
    border: none;
    padding: 5px 10px;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    height: 25px;
    display: flex;
    margin-right: 7px;
    font-size: 14px;
    font-weight: 400;
    color: #7f7f7f;
    outline: none;
`;

export const FirstWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 580px;
`;

export const TechContentsText = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #7f7f7f;
    margin-top: 8px;
`;

export const SearchInput = styled.input`
    background: #eaeaea;
    border: 0.5px solid #f7f7f7;
    border-radius: 30px;
    width: 250px;
    height: 40px;
    outline: none;
    padding: 10px 50px 10px 20px;
`;