import styled from "styled-components";
import { BlueStar } from "../BlueStar";
import Inputs from "../Register/Inputs";

function Companies() {
  const setup = [
    {
      title: "기업정보",
      data: [
        {
          title: "기업명",
          content: "지건컴퍼니",
          placeholder: "",
          isStar: true,
        },
        {
          title: "사업자 번호",
          content: "0000000000",
          placeholder: "000-00-00000",
          isStar: true,
        },
        {
          title: "대표자",
          content: "",
          placeholder: "",
          isStar: true,
        },
        {
          title: "설립일",
          content: "",
          placeholder: "YYYY.MM.DD",
          isStar: true,
        },
        {
          title: "주소(본사)",
          content: "",
          placeholder: "주소",
          isStar: true,
          detail: {
            content: "",
            placeholder: "상세주소",
          },
        },
        {
          title: "주소(지점)",
          content: "",
          placeholder: "주소",
          isStar: false,
          detail: {
            content: "",
            placeholder: "상세주소",
          },
        },
        {
          title: "매출액",
          content: "",
          placeholder: "억/년",
          isStar: true,
        },
        {
          title: "총 근로자수",
          content: "",
          placeholder: "명",
          isStar: true,
        },
      ],
    },
    {
      title: "담당자",
      data: [
        {
          title: "담당자명1",
          content: "",
          placeholder: "",
          isStar: true,
        },
        {
          title: "전화번호1",
          content: "",
          placeholder: "",
          isStar: true,
        },
        {
          title: "담당자명2",
          content: "",
          placeholder: "",
          isStar: false,
        },
        {
          title: "전화번호2",
          content: "",
          placeholder: "",
          isStar: false,
        },
        {
          title: "이메일",
          content: "",
          placeholder: "",
          isStar: true,
        },
        {
          title: "팩스번호",
          content: "",
          placeholder: "",
          isStar: false,
        },
      ],
    },
    {
      title: "회사소개",
      data: [
        {
          title: "회사개요",
          content: "",
          placeholder: "",
          isStar: true,
        },
        {
          title: "회사 로고",
          content: "",
          placeholder: "",
          isStar: true,
        },
        {
          title: "파일 첨부",
          content: "",
          placeholder: "",
          isStar: false,
        },
      ],
    },
    {
      title: "개인정보 수집 및 이용 안내",
      data: [],
    },
  ];

  return (
    <Container>
      <Title>기업 정보 등록</Title>
      <SubTitle>
        등록된 정보는 본 시스템을 통해 접수된 건에 한하여 정식적으로 검토되며 등록된 정보는 서비스 이용에 활용됩니다.
      </SubTitle>
      <RequireText>
        <BlueStar>*</BlueStar> 표시는 필수 입력 항목입니다.
      </RequireText>
      {/* ----------- */}

      {setup.map((list) => {
        return (
          <Company__Inpo__Box>
            <h3>{list.title}</h3>
            <Company__Line />
            {list.data.map((list) => {
              return (
                <Company__Inpo__Inputs>
                  <Company__Inpo__Inputs__title>
                    <p>{list.title}</p>
                    {list.isStar && <BlueStar>*</BlueStar>}
                  </Company__Inpo__Inputs__title>
                  <Inputs
                    title={list.title}
                    content={list.content}
                    placeholder={list.placeholder}
                    detail={list.detail}
                  />
                </Company__Inpo__Inputs>
              );
            })}
          </Company__Inpo__Box>
        );
      })}
      {/* ----------- */}
      <Display>
        <CancelButton>취소</CancelButton>
        <ConfirmRequestButton>의뢰서 작성 완료</ConfirmRequestButton>
      </Display>
    </Container>
  );
}

const Company__Inpo__Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;

const Company__Inpo__Inputs__title = styled.div`
  display: flex;
  font-weight: 600;
  margin-top: 6px;
`;

const Company__Line = styled.hr`
  border: 1px solid;
  margin-top: 14px;
`;

const Company__Inpo__Box = styled.div`
  width: 550px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  min-height: 2000px;
  margin-top: 130px;
  margin-bottom: 80px;
  z-index: 99;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 650;
  margin-top: 80px;
`;

const SubTitle = styled.div`
  text-align: center;
  width: 460px;
  font-size: 16px;
  font-weight: 400;
  margin-top: 15px;
`;

const RequireText = styled.div`
  display: flex;
  margin-top: 50px;
  width: 550px;
  text-align: left;
  font-size: 14px;
  color: #7f7f7f;
  font-weight: 400;
`;

const Display = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 60px;
`;

const CancelButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border: 1.5px solid #0f4c82;
  border-radius: 3px;
  color: #0f4c82;
  font-weight: 400;
  cursor: pointer;
`;

const ConfirmRequestButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  border-radius: 3px;
  background-color: #0f4c82;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;

export default Companies;
