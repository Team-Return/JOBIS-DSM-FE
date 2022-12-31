import request from "../axios/index";

export default {
  login(id: string, pw: string) {
    //로그인
    return request({
      url: `/users/login`,
      method: "post",
      data: { account_id: id, password: pw },
    });
  },
};
