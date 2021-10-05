import http from "../http-common";

const getAll = () => {
  return http.get("/photos");
};



export default {
  getAll,
};
