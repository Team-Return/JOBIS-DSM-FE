import request from "../axios/index";
import { IArea } from "../interfaces/Company";
import { IHiringProgress } from "../interfaces/Enums";

export default {
  signUpCompany(
    business_number: string,
    password: string,
    company_introduce: string,
    zip_code1: string,
    address1: string,
    zip_code2: string,
    address2: string,
    manager1: string,
    phone_number1: string,
    manager2: string,
    phone_number2: string,
    fax: string,
    email: string,
    representative_name: string,
    founded_at: string,
    worker_number: number,
    take: number
  ) {
    //기업체 등록
    return request({
      url: `/companies`,
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
      data: {
        business_number,
        password,
        company_introduce,
        zip_code1,
        address1,
        zip_code2,
        address2,
        manager1,
        phone_number1,
        manager2,
        phone_number2,
        fax,
        email,
        representative_name,
        founded_at,
        worker_number,
        take,
      },
    });
  },
  postRecruitment(
    preferential_treatment: string,
    areas: IArea[],
    required_grade: number,
    required_licenses: string[],
    work_hours: number,
    train_pay: number,
    pay: number,
    benefits: string,
    military: boolean,
    hiring_progress: IHiringProgress[],
    submit_document_url: string,
    start_date: string,
    end_date: string,
    etc: string
  ) {
    //모집 의뢰서 작성
    return request({
      url: `/companies/recruitment`,
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
      data: {
        preferential_treatment,
        areas,
        required_grade,
        required_licenses,
        work_hours,
        train_pay,
        pay,
        benefits,
        military,
        hiring_progress,
        submit_document_url,
        start_date,
        end_date,
        etc,
      },
    });
  },
  isCompany(id: string) {
    //회사 계정 여부
    return request({
      url: `/companies/exists/${id}`,
      method: "get",
    });
  },
};
