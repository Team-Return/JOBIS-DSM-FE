import request from "../axios/index";

const getMyInfo = () => {
    return request({
        url: `/code/job`,
        method: "get",
        headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
        },
    });
}

export default {
    getMyInfo
}