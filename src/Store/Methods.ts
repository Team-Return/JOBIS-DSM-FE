import { atom } from "recoil";

export const methods = atom({
  key: "method",
  default: [
    { id: 0, name: "서류전형", isSelect: true },
    { id: 1, name: "인적성테스트", isSelect: false },
    { id: 2, name: "코딩테스트", isSelect: false },
    { id: 3, name: "라이브코딩", isSelect: false },
    { id: 4, name: "AI 면접", isSelect: false },
    { id: 5, name: "과제 제출", isSelect: false },
    { id: 6, name: "걸쳐면접", isSelect: false },
    { id: 7, name: "기술면접", isSelect: false },
    { id: 8, name: "최종면접", isSelect: false },
  ],
});

export const processAtom = atom({
  key: "process",
  default: [{ id: 0, name: "서류전형" }],
});
