import axios from "axios";
import {
  GET_ERRORS,
  GET_SCHEDULES,
  GET_SCHEDULE,
  DELETE_SCHEDULE
} from "./types";

export const createSchedule = (schedule, history) => async dispatch => {
  try {
    await axios.post("/api/schedule", schedule);
    history.push("/dashboard");
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

export const getSchedules = () => async dispatch => {
  const res = await axios.get("/api/schedule/all");
  dispatch({
    type: GET_SCHEDULES,
    payload: res.data
  });
};

export const getSchedule = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/schedule/${id}`);
    dispatch({
      type: GET_SCHEDULE,
      payload: res.data
    });
  } catch (error) {
    history.push("/dashboard");
  }
};

export const deleteSchedule = id => async dispatch => {
  if (
    window.confirm(
      "Are you sure? This will delete the schedule and all the data related to it"
    )
  ) {
    await axios.delete(`/api/schedule/${id}`);
    dispatch({
      type: DELETE_SCHEDULE,
      payload: id
    });
  }
};
