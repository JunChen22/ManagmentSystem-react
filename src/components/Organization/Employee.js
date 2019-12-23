import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteEmployee } from "../../actions/employeeAction";
import CreateScheduleForm from "../Schedule/CreateScheduleForm";
import AddSchedule from "../Schedule/AddSchedule";

class Employee extends Component {
  constructor() {
    super();

    this.state = {
      address: "asdfas",
      dob: "",
      email: "",
      firstName: "emp3",
      idemployee: "3",
      lastName: "",
      phoneNumber: "",
      position: ""
    };
  }

  onDeleteClick = id => {
    this.props.deleteProject(id);
  };

  render() {
    const { employee } = this.props;
    let fname, lname, userEmail;
    for (var x in employee) {
      if (x === "firstName") fname = employee[x];
      if (x === "lastName") lname = employee[x];
      if (x === "email") userEmail = employee[x];
    }
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              {lname}, {fname}
            </div>
            <div className="col-lg-6 col-md-4 col-8"></div>
            <CreateScheduleForm userEmail={userEmail} />
          </div>
        </div>
      </div>
    );
  }
}

Employee.propTypes = {
  deleteEmployee: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEmployee }
)(Employee);
