import styled from "styled-components";
import SignUpImg from "../../Assets/SignUpImg.png";
import INFO from "../../Assets/INFO.png";
import useInput from "../../Hooks/useInput";
import users from "../../Utils/apis/users";
import company from "../../Utils/apis/companies";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { CompanyNumberAtom } from "../../Store/atom";

const SignIn = () => {
  const [pw, onChangePw, setPw] = useInput();
  const [id, setId] = useState("");
  const [isNext, setIsNext] = useState(false);
  const [isExist, setIsExist] = useState(false);
  const [companyNumber, setCompanyNumber] = useRecoilState(CompanyNumberAtom);
  const navigate = useNavigate();
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, "");
    setId(onlyNumber);
  };

  const idBorder = !id;
  const pwBorder = !pw;

  const CheckBusinessNumber = () => {
    company
      .isCompany(id)
      .then((res) => {
        setIsNext(true);
        //TODO:: if문 수정
        if (res?.data.exists) {
          setIsExist(true);
        }
      })
      .catch((err) => {
        switch (err.request.status) {
          case 500:
            setIsNext(true);
            setIsExist(false);
            setCompanyNumber(id);
            break;
          default:
            alert("에러");
            break;
        }
      });
  };

  const Login = () => {
    users
      .login(id, pw)
      .then((res) => {
        alert("로그인 성공");
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/signup");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const SignUp = () => {
    navigate("/company", { state: { data: pw } });
  };

  return (
    <Container>
      <Wrapper>
        <Title>사업자 인증</Title>
        {isNext ? (
          <Input
            onChange={onChangePw}
            borderColor={pwBorder ? "#7f7f7f" : "#0F4C82"}
            value={pw}
            placeholder="비밀번호를 입력해주세요"
          />
        ) : (
          <Input
            onChange={onChangeId}
            borderColor={idBorder ? "#7f7f7f" : "#0F4C82"}
            value={id.replace(/(\d{3})(\d{2})(\d{5})/, "$1-$2-$3")}
            placeholder="사업자 번호를 입력해주세요"
            maxLength={10}
          />
        )}
        <div>
          <div style={{ position: "absolute", width: 200, fontSize: 12 }}>
            {isNext
              ? isExist
                ? "존재하는 기업입니다. 비밀번호를 입력하고 로그인하세요."
                : "등록되지 않은 기업입니다. 비밀번호를 입력하고 기업을 등록하세요!!!"
              : ""}
          </div>
          <img style={{ marginLeft: 210 }} width={20} height={20} src={INFO} />
        </div>
        <Button onClick={isNext ? (isExist ? Login : SignUp) : CheckBusinessNumber}>
          {isNext ? (isExist ? "로그인하기" : "등록하기") : "사업자 번호 확인"}
        </Button>
      </Wrapper>
      <Img src={SignUpImg} />
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  position: relative;
  width: 850px;
  height: 450px;
  border-radius: 30px;
  background-color: white;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  z-index: 99;
  overflow: hidden;
`;

const Img = styled.img`
  position: absolute;
  right: 0;
  width: 550px;
  height: 450px;
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  background-color: #ffffff;
`;

const Title = styled.div`
  margin-top: 65px;
  margin-bottom: 40px;
  font-size: 30px;
  font-weight: 400;
`;

const Input = styled.input<{ borderColor: string }>`
  border: 0;
  outline: 0;
  padding: 10px;
  width: 230px;
  height: 40px;
  border-bottom: 2px solid ${(props) => props.borderColor};
  margin-bottom: 50px;
  font-size: 14px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 350;
  width: 250px;
  height: 40px;
  border-radius: 5px;
  color: white;
  margin-top: 60px;
  border: 0;
  cursor: pointer;
  background-color: ${(props) => props.theme.Main500};
`;
