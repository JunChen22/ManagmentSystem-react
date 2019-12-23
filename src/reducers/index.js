import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import securityReducer from "./securityReducer";
import scheduleReducer from "./scheduleReducer";
import organizationReducer from "./organizationReducer";
import employeeReducer from "./employeeReducer";

export default combineReducers({
  errors: errorReducer,
  security: securityReducer,
  schedule: scheduleReducer,
  organization: organizationReducer,
  employee: employeeReducer
});
