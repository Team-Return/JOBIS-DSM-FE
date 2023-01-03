import { atom } from "recoil";

const CompaniesState = atom({
  key: "CompaniesState",
  default: {
    business_number: "",
    password: "",
    company_introduce: "",
    zip_code1: "",
    address1:
      "",
    zip_code2: "",
    address2: "",
    manager1: "",
    phone_number1: "",
    manager2: "",
    phone_number2: "",
    fax: "",
    email: "",
    representative_name: "",
    founded_at: "",
    worker_number: 0,
    take: 0,
  },
});

export default CompaniesState;
