import React from "react";
import { Link } from "react-router-dom";

const CreateScheduleForm = props => {
  return (
    <React.Fragment>
      <Link
        to={{
          pathname: "/addschedule",
          state: {
            email: props.userEmail
          }
        }}
      >
        add a schedule
      </Link>
    </React.Fragment>
  );
};

export default CreateScheduleForm;
