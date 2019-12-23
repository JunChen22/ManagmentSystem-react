import axios from "axios";
import { GET_ERRORS, GET_MEMBERS, DELETE_MEMBER } from "./types";

export const createEmployee = (newEmployee, history) => async dispatch => {
  try {
    console.log(" at emp action");
    await axios.post("/api/organization/add", newEmployee);
    history.push("/organization");
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

export const getEmployees = () => async dispatch => {
  const res = await axios.get("/api/organization/all");
  dispatch({
    type: GET_MEMBERS,
    payload: res.data
  });
};

export const deleteEmployee = id => async dispatch => {
  if (
    window.confirm(
      "Are you sure? This will delete the project and all the data related to it"
    )
  ) {
    await axios.delete(`/api/project/${id}`);
    dispatch({
      type: DELETE_MEMBER,
      payload: id
    });
  }
};
