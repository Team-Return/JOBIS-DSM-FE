import { atom } from "recoil";
import { IRecruitment } from "../Utils/interfaces/Company";

const date = new Date();

const year = date.getFullYear();
const month = ("0" + (date.getMonth() + 1)).slice(-2);
const day = ("0" + date.getDate()).slice(-2);
const dateStr = year + "-" + month + "-" + day;

//모집의뢰서 작성 데이터 atom
export const recruitmentCompany = atom<IRecruitment>({
  key: "recruitmentCompany",
  default: {
    preferential_treatment: "",
    areas: [],
    required_grade: 0,
    required_licenses: [],
    work_hours: 0,
    train_pay: 0,
    pay: 0,
    benefits: "",
    military: false,
    hiring_progress: [],
    submit_document_url: "",
    start_date: dateStr,
    end_date: "",
    etc: "",
  },
});
