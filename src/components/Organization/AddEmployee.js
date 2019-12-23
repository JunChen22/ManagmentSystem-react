import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createEmployee } from "../../actions/employeeAction";
import { Link } from "react-router-dom";

class AddEmployee extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      DOB: "",
      email: "",
      address: "",
      phoneNumber: "",
      position: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const newEmployee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      DOB: this.state.DOB,
      email: this.state.email,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      position: this.state.position
    };
    console.log("at submit");
    console.log(this.state);
    console.log(newEmployee);
    this.props.createEmployee(newEmployee, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="create-organization">
        <div className="container">
          <div className="form-row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add employee</h1>
              <p className="lead text-center">
                Add an employee to your organization
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.firstName
                      })}
                      placeholder="First Name"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.onChange}
                    />
                    {errors.firstName && (
                      <div className="invalid-feedback">{errors.firstName}</div>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.lastName
                      })}
                      placeholder="Last Name"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.onChange}
                    />
                    {errors.lastName && (
                      <div className="invalid-feedback">{errors.lastName}</div>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="DOB"
                    value={this.state.DOB}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Address"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control form-control-lg"
                    placeholder="Phone number"
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.position
                    })}
                    placeholder="position"
                    name="position"
                    value={this.state.position}
                    onChange={this.onChange}
                  />

                  {errors.position && (
                    <div className="invalid-feedback">{errors.position}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-2" />
                <Link
                  className="btn btn-primary btn-block mt-2"
                  to="/organization"
                >
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddEmployee.propTypes = {
  createEmployee: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createEmployee }
)(AddEmployee);
