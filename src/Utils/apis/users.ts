import request from "../axios/index";

export default {
  login(id: string, pw: string) {
    //로그인
    return request({
      url: `/login`,
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
      data: { account_id: id, password: pw },
    });
  },
};
