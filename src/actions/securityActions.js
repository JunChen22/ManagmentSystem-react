import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import jwt_decode from "jwt-decode";
import setJWTToken from "../security/setJWTToken";

export const createNewUser = (newUser, history) => async dispatch => {
  try {
    await axios.post("/api/user/register", newUser);
    history.push("/login");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const login = LoginRequest => async dispatch => {
  try {
    const request = await axios.post("/api/user/login", LoginRequest);

    const { token } = request.data;

    localStorage.setItem("jwtToken", token);
    setJWTToken(token);

    const decodedToken = jwt_decode(token);

    dispatch({
      type: SET_CURRENT_USER,
      payload: decodedToken
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setJWTToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};
