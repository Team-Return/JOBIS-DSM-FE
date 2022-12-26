import styled from "styled-components";

interface Type {
  content: string;
}

function GhostBtn({ content }: Type) {
  return <Btn>{content}</Btn>;
}

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

export default GhostBtn;
