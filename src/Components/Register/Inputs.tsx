import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Juso from "./juso_input";
import Attachments from "./Attachments";
import { useRecoilState } from "recoil";
import CompaniesState from "../../Store/Recoil/CompaniesState";

interface IComponent {
  title: string;
  content: string;
  placeholder: string;
  detail?: {
    content: string;
    placeholder: string;
  };
}

function Inputs({ title, content, placeholder, detail }: IComponent) {
  const [value__, setValue] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [fax, setFax] = useState("");
  const [date, setDate] = useState("");


  const [companyInpo, setCompantInpo] = useRecoilState(CompaniesState);

  const changeData = (name: string, value: string) => {
    setCompantInpo({
      ...companyInpo,
      [name]: value,
    });
  };

  useEffect(() => {
    if (date.length === 6) {
      setDate(date.replace(/(\d{4})(\d{02})(\d{0})/, "$1.$2.$3"));
    }
    if (date.length === 10) {
      setDate(
        date.replace(/-/g, "").replace(/(\d{4})(\d{02})(\d{02})/, "$1.$2.$3")
      );
    }
  }, [date]);
  useEffect(() => {
    if (num1.length === 10) {
      setNum1(num1.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (num1.length === 13) {
      setNum1(
        num1.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [num1]);
  useEffect(() => {
    if (num2.length === 10) {
      setNum2(num2.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (num2.length === 13) {
      setNum2(
        num2.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [num2]);
  useEffect(() => {
    if (fax.length === 10) {
      setFax(fax.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (fax.length === 13) {
      setFax(
        fax.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [fax]);

  const onChangeDefault = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValue(e.target.value);
    changeData(name, value);
    console.log(companyInpo);
  };

  switch (title) {
    case "?????????": {
      return <Line__default value={content} />;
    }
    case "????????? ??????": {
      const businessNum =
        content.substring(0, 3) +
        "-" +
        content.substring(3, 5) +
        "-" +
        content.substring(5, 10);
      return <Line__default placeholder={placeholder} value={businessNum} />;
    }
    case "?????????": {
      return (
        <Line__default
          name="representative_name"
          placeholder={placeholder}
          value={value__}
          onChange={onChangeDefault}
        />
      );
    }
    case "?????????": {
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[0-9\b .]{0,10}$/;
        const regex_ = /[^0-9]/g;
        const { name, value } = e.target;
        if (regex.test(e.target.value)) {
          setDate(e.target.value);
        }
        changeData(name, value.replace(regex_, ""));
        console.log(companyInpo);
      };
      return (
        <Line__default
          name="founded_at"
          type="text"
          placeholder={placeholder}
          value={date}
          onChange={handleChange}
        />
      );
    }
    case "??????(??????)": {
      return <Juso name="??????" placeholder={placeholder} detail={detail} />;
    }
    case "??????(??????)": {
      return <Juso name="??????" placeholder={placeholder} detail={detail} />;
    }
    case "?????????": {
      return (
        <Line__default
          name="take"
          placeholder={placeholder}
          value={value__}
          onChange={onChangeDefault}
        />
      );
    }
    case "??? ????????????": {
      return (
        <Line__default
          name="worker_number"
          placeholder={placeholder}
          value={value__}
          onChange={onChangeDefault}
        />
      );
    }
    case "????????????1": {
      return (
        <Line__default
          name="manager1"
          placeholder={placeholder}
          value={value__}
          onChange={onChangeDefault}
        />
      );
    }
    case "????????????1": {
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[0-9\b -]{0,13}$/;
        const regex_ = /[^0-9]/g;
        const { name, value } = e.target;
        if (regex.test(e.target.value)) {
          setNum1(e.target.value);
        }
        changeData(name, value.replace(regex_, ""));
        console.log(companyInpo);
      };
      return (
        <Line__default
          name="phone_number1"
          type="text"
          value={num1}
          onChange={handleChange}
        />
      );
    }
    case "????????????2": {
      return (
        <Line__default
          name="manager2"
          placeholder={placeholder}
          value={value__}
          onChange={onChangeDefault}
        />
      );
    }
    case "????????????2": {
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[0-9\b -]{0,13}$/;
        const regex_ = /[^0-9]/g;
        const { name, value } = e.target;
        if (regex.test(e.target.value)) {
          setNum2(e.target.value);
        }
        changeData(name, value.replace(regex_, ""));
        console.log(companyInpo);
      };
      return (
        <Line__default
          name="phone_number2"
          type="text"
          value={num2}
          onChange={handleChange}
        />
      );
    }
    case "?????????": {
      return (
        <Line__default
          name="email"
          type="email"
          placeholder={placeholder}
          value={value__}
          onChange={onChangeDefault}
        />
      );
    }
    case "????????????": {
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[0-9\b -]{0,13}$/;
        const regex_ = /[^0-9]/g;
        const { name, value } = e.target;
        if (regex.test(e.target.value)) {
          setFax(e.target.value);
        }
        changeData(name, value.replace(regex_, ""));
        console.log(companyInpo);
        
      };
      return (
        <Line__default
          name="fax"
          type="text"
          value={fax}
          onChange={handleChange}
        />
      );
    }
    case "????????????": {
      return (
        <Line__textarea
          name="company_introduce"
          value={value__}
          onChange={onChangeDefault}
        />
      );
    }
    case "?????? ??????": {
      return <Attachments name={"?????? ??????"} />;
    }
    case "?????? ??????": {
      return <Attachments name={"?????? ??????"} />;
    }
    default: {
      return (
        <Line__default
          placeholder={placeholder}
          value={value__}
          onChange={onChangeDefault}
        />
      );
    }
  }
}

const Line__textarea = styled.textarea`
  width: 430px;
  min-height: 100px;
  border: 0;
  border-bottom: 1px solid #cccccc;
  outline: 0;
  resize: none;
`;

const Line__default = styled.input`
  width: 430px;
  height: 30px;
  padding-left: 12px;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #cccccc;
  &::placeholder {
    color: #7f7f7f;
  }
`;

export default Inputs;
