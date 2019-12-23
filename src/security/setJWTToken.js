import axious from "axios";

const setJWTToken = token => {
  if (token) {
    axious.defaults.headers.common["Authorization"] = token;
  } else {
    delete axious.defaults.headers.common["Authorization"];
  }
};

export default setJWTToken;
