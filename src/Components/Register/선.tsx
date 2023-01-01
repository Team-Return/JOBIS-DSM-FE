import styled from "styled-components";

const LineComponent = ({
  title,
  content,
}: {
  title?: string;
  content?: string;
}) => {
  return <Container placeholder={title}>{content}</Container>;
};

export default LineComponent;

const Container = styled.input`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  width: 430px;
  height: 20px;
  padding-bottom: 7px;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #cccccc;
  padding-left: 15px;
  &::placeholder {
    color: #7f7f7f;
  }
`;
