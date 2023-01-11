import request from "../axios/index";

const getJob = () => {
    return request({
        url: `/code/job`,
        method: "get",
        headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
        },
    });
}

const getTech = () => {
    return request({
        url: `/code/tech?keyword`,
        method: "get",
    });
}

const apis = {
    getTech, getJob
}

export default apis