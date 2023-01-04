import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { useRecoilState } from "recoil";
import CompaniesState from "../../Store/Recoil/CompaniesState";

interface Type {
  name: string;
  placeholder: string;
  detail?: {
    content: string;
    placeholder: string;
  };
}

function Juso({ name, placeholder, detail }: Type) {
  const [modalState, setModalState] = useState(false);
  const [juso, setJuso] = useState("");
  const [companyInpo, setCompanyInpo] = useRecoilState(CompaniesState);

  const handle = {
    clickButton: () => {
      setModalState((current) => !current);
    },
    selectAddress: (data: any) => {
      const temp = data.address + " " + "(" + data.zonecode + ")";
      setJuso(temp);
      setModalState(false);
      const addressData = name === "본사" ? "address1" : "address2";
      const zonecodeData = name === "본사" ? "zip_code1" : "zip_code2";
      setCompanyInpo({
        ...companyInpo,
        [addressData]: data.address,
        [zonecodeData]: data.zonecode,
      });
      console.log(companyInpo);
    },
  };

  return (
    <div>
      <JusoInput>
        <Line__Juso value={juso} placeholder={placeholder} />
        <Btn onClick={handle.clickButton}>검색</Btn>
        {modalState && (
          <Modal onClick={handle.clickButton}>
            <DaumPostcode style={Style} onComplete={handle.selectAddress} />
          </Modal>
        )}
      </JusoInput>
      <Line__Detail placeholder={detail?.placeholder} />
    </div>
  );
}

const Style = {
  width: "400px",
  height: "400px",
};

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 30%);
`;

const JusoInput = styled.div`
  width: 430px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Line__Juso = styled.input`
  width: 310px;
  height: 30px;
  padding-left: 12px;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #cccccc;
  &::placeholder {
    color: #7f7f7f;
  }
`;

const Btn = styled.button`
  width: 100px;
  height: 40px;
  color: #0f4c82;
  border: 2px solid #0f4c82;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    font-weight: 900;
    border: 2.5px solid #0f4c82;
  }
`;

const Line__Detail = styled.input`
  width: 430px;
  height: 30px;
  padding-left: 12px;
  border: 0;
  outline: 0;
  margin-top: 30px;
  border-bottom: 1px solid #cccccc;
  &::placeholder {
    color: #7f7f7f;
  }
`;

export default Juso;
