import { GET_SCHEDULES, GET_SCHEDULE, DELETE_SCHEDULE } from "../actions/types";

const initialState = {
  schedules: [],
  schedule: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SCHEDULES:
      return {
        ...state,
        schedules: action.payload
      };

    default:
      return state;
  }
}
