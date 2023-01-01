import styled from "styled-components";
import FileIcon from "../../Assets/file.svg";
import XBtn from "../../Assets/X.svg";

interface Type {
  name: string;
  size: number;
}

function Files({ name, size }: Type) {
  return (
    <File>
      <FileBox>
        <Img src={FileIcon} />
        {name}
        <Size>{(size / 1024.0).toFixed(2) + "KB"}</Size>
      </FileBox>
      <DelBtn>
        <img src={XBtn} />
      </DelBtn>
    </File>
  );
}

const File = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 10px;
`;

const DelBtn = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  cursor: pointer;
`;

const Size = styled.p`
  color: #7f7f7f;
`;

const FileBox = styled.div`
  display: flex;
  gap: 8px;
  font-size: 15px;
  align-items: center;
`;

const Img = styled.img`
  width: 13px;
`;

export default Files;
