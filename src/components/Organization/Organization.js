import React, { Component } from "react";
import CreateOrganizationForm from "../Organization/CreateOrganizationForm";
import CreateEmployeeForm from "./CreateEmployeeForm";
import { getOrganization } from "../../actions/organizationActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Employee from "./Employee";

class Organization extends Component {
  componentDidMount() {
    this.props.getOrganization();
  }

  render() {
    const { organization } = this.props.organ;

    let existingOrganization;
    let name;
    if (organization.length === 0) {
      name = "Organization page";
      existingOrganization = <CreateOrganizationForm />;
    } else {
      name = organization["orgName"];
      existingOrganization = (
        <h1>
          <CreateEmployeeForm />
        </h1>
      );
    }
    let result = [];
    for (var x in organization["employees"]) {
      result.push(organization["employees"][x]);
    }

    return (
      <div>
        {name}
        <br />
        {existingOrganization}
        <br />
        <br />
        {result.map(emp => (
          <Employee employee={emp} />
        ))}
      </div>
    );
  }
}

Organization.propTypes = {
  organ: PropTypes.object.isRequired,
  getOrganization: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  organ: state.organization
});

export default connect(
  mapStateToProps,
  { getOrganization }
)(Organization);
