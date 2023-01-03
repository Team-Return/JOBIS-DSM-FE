import { IHiringProgress } from "./Enums";

export interface IArea {
  job: number[];
  tech: number[];
  hiring: number;
  major_task: string;
}

export interface IRecruitment {
  preferential_treatment: string;
  areas: IArea[];
  required_grade: number;
  required_licenses: string[];
  work_hours: number;
  train_pay: number;
  pay: number;
  benefits: string;
  military: boolean;
  hiring_progress: IHiringProgress[];
  submit_document: string;
  start_date: string;
  end_date: string;
  etc: string;
}
