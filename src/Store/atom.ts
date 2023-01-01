import { atom } from "recoil";

interface ITech {
    code: number;
    keyword: string,
    isSelect?: boolean,
}

export const ModalAtom = atom({
    key: "ModalKey",
    default: "",
});

export const TechAtom = atom<ITech[]>({
    key: "TechKey",
    default: []
})

export const TechModalAtom = atom({
    key: "TechModalKey",
    default: false,
});