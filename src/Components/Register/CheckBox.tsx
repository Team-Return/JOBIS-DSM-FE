import styled from "styled-components";

const CheckBox = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <Input type="checkbox" />
      <Text>{title}</Text>
    </Wrapper>
  );
};

export default CheckBox;

const Wrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid #dedede;
  margin-right: 10px;
`;

const Text = styled.div`
  margin: 5px 0px;
`;
