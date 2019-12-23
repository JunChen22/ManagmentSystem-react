import React from "react";
import { Link } from "react-router-dom";

const AddEmployeeForm = () => {
  return (
    <React.Fragment>
      <Link to="/organization/add" className="btn btn-lg btn-info">
        Add an employee
      </Link>
    </React.Fragment>
  );
};

export default AddEmployeeForm;
