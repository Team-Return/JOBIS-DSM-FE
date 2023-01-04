import { atom } from "recoil";

interface ITech {
  code: number;
  keyword: string;
  isSelect?: boolean;
}

interface IField {
  code: number;
  keyword: string;
  isSelect?: boolean;
}

export interface IGatherField {
  field: ITech[];
  tech: ITech[];
  people: number;
  work: string;
  index?: number;
}

export const ModalAtom = atom({
  key: "ModalKey",
  default: "",
});

export const FieldAtom = atom<ITech[]>({
  key: "FieldKey",
  default: [],
});

export const TechAtom = atom<ITech[]>({
  key: "TechKey",
  default: [],
});

export const TechModalAtom = atom({
  key: "TechModalKey",
  default: false,
});

export const GatherFieldAtom = atom<IGatherField[]>({
  key: "gatherFieldAtom",
  default: [],
});

export const CompanyNumberAtom = atom({
  key: "companyNumber",
  default: "",
});
