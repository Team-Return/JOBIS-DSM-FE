import styled from "styled-components";
import SignUpImg from "../../Assets/SignUpImg.png";
import INFO from "../../Assets/INFO.png";
import useInput from "../../Hooks/useInput";
import users from "../../Utils/apis/users";

const SignIn = () => {
  const [id, onChangeId, setId] = useInput();
  const [password, onChangePassword, setPassword] = useInput();

  const SubmitLogin = () => {
    users.login(id, password);
  };

  return (
    <Container>
      <Wrapper>
        <Title>사업자 인증</Title>
        <Input onChange={onChangeId} value={id} placeholder="사업자 번호를 입력해주세요" />
        <Input onChange={onChangePassword} value={password} placeholder="비밀번호를 입력해주세요" />
        <img style={{ marginLeft: 210 }} width={20} height={20} src={INFO} />
        <Button onClick={SubmitLogin}>등록하기</Button>
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

const Input = styled.input`
  border: 0;
  outline: 0;
  padding: 10px;
  width: 230px;
  height: 40px;
  border-bottom: 1.5px solid black;
  margin-bottom: 10px;
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
