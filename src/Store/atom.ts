import { atom } from "recoil";

export interface ITech {
    code: number,
    keyword: string,
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