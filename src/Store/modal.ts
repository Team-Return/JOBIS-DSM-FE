import { atom } from "recoil";

export const isModalAtom = atom({
  key: "isModal",
  default: false,
});

export const modalTypeAtom = atom({
  key: "modalType",
  default: "none",
});
