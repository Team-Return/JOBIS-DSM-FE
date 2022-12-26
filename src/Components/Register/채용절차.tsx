import { useState } from "react";
import styled from "styled-components";
import HiringBox from "./채용절차박스";

const HiringProcess = () => {
  return (
    <>
      <Button>+</Button>
      <Boxs>
        <HiringBox></HiringBox>
      </Boxs>
    </>
  );
};

export default HiringProcess;

const Button = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  border: 1px solid #0f4c82;
  color: #0f4c82;
  width: 75px;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
  background-color: white;
`;

const Boxs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 40px 0;
`;
