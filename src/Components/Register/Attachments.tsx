import styled from "styled-components";
import React, { useRef, useState } from "react";
import Files from "./upLoadFiles";

interface Type {
  name: string;
}

function Attachments({ name }: Type) {
  const flieInput = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>();

  let setting = {
    img: "",
    multiple: true,
  };

  if (name === "회사 로고") {
    setting.img = "image/*";
    setting.multiple = false;
  }

  const upLoadButtonClick = (e: any) => {
    if (flieInput.current) {
      flieInput.current.click();
    }
  };
  const upLoadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(Array.from(e.target.files || []));
    console.log(files);
  };

  return (
    <LogoUpload>
      <FileList>
        {files?.map((file) => (
          <Files key={file.name} name={file.name} size={file.size} />
        ))}
      </FileList>
      <UpLoadGuide>
        <GuideText>
          {name == "회사 로고" ? (
            <>
              <div>
                <One />
              </div>
              <div>
                <p>
                  파일은 최대 10MB를 초과 할 수 없고, 1개만 첨부할 수 있습니다.
                </p>
                <p>이미지 파일만 업로드 가능합니다.</p>
              </div>
            </>
          ) : (
            <div>
              <div>
                <div>
                  <One />
                </div>
                <div>
                  <p>
                    홍보영상, 회사 소개서, 회사 사진등과 같은 홍보자료를
                    첨부하세요.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <One />
                </div>
                <div>
                  <p>파일은 최대 50MB를 초과 할 수 없습니다.</p>
                  <p>
                    PDF, PPT, PPTX, HWP, JPG, PNG, ZIP, SVG, TXT, MP4 파일만
                    업로드 가능합니다.
                  </p>
                </div>
              </div>
            </div>
          )}
        </GuideText>
        <React.Fragment>
          <Btn onClick={upLoadButtonClick}>파일추가</Btn>
          <input
            style={{ display: "none" }}
            ref={flieInput}
            onChange={upLoadChange}
            type="file"
            multiple={setting.multiple}
            accept={setting.img}
          />
        </React.Fragment>
      </UpLoadGuide>
    </LogoUpload>
  );
}

const LogoUpload = styled.div``;

const One = styled.div`
  width: 5px;
  height: 5px;
  margin: 5px;
  border: 0;
  border-radius: 50%;
  background-color: #7f7f7f;
`;

const GuideText = styled.div`
  font-size: 12px;
  color: #7f7f7f;
  width: 300px;
  display: flex;
  > div {
    display: flex;
    flex-direction: column;
    > div {
      display: flex;
    }
  }
`;

const UpLoadGuide = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FileList = styled.div`
  width: 430px;
  min-height: 40px;
  margin-bottom: 20px;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export default Attachments;
