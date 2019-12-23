import { GET_MEMBERS } from "../actions/types";

const initialState = {
  employees: [],
  employee: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MEMBERS:
      return {
        ...state,
        employees: action.payload
      };
    default:
      return state;
  }
}
