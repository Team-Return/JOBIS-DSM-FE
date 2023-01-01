import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.bgColor};
  margin: 0;
  z-index: 98;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Img = styled.img`
  width: 25px;
  margin-right: 15px;
  cursor: pointer;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: 80px;
  height: 30px;
  font-weight: 400;
  color: ${(props) => props.theme.black};
  cursor: pointer;
`;
