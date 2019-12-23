import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createOrganization } from "../../actions/organizationActions";

class AddOranization extends Component {
  constructor() {
    super();

    this.state = {
      orgName: "",
      description: "",
      email: "",
      address: "",
      phoneNumber: "",
      businessType: "",
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
    const newOrganization = {
      orgName: this.state.orgName,
      description: this.state.description,
      email: this.state.email,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      businessType: this.state.businessType
    };
    console.log("at submit");
    console.log(this.state);
    console.log(newOrganization);
    this.props.createOrganization(newOrganization, this.props.history);
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
              <h1 className="display-4 text-center">Create organization</h1>
              <p className="lead text-center">
                Create your organization for you and your team
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.orgName
                      })}
                      placeholder="Organization Name"
                      name="orgName"
                      value={this.state.orgName}
                      onChange={this.onChange}
                    />
                    {errors.orgName && (
                      <div className="invalid-feedback">{errors.orgName}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Description"
                      name="description"
                      value={this.state.description}
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
                  </div>
                  <div className="form-group">
                    <select
                      name="businessType"
                      value={this.state.value}
                      onChange={this.onChange}
                      className="form-control form-control-lg"
                    >
                      <option disabled selected value>
                        {" "}
                        -- select an option --{" "}
                      </option>
                      <option value="Corporation">Corporation</option>
                      <option value="Partnership">Partnership</option>
                      <option value="LLC">LLC</option>
                      <option value="Sole proprietorship">
                        Sole proprietorship
                      </option>
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        placeholder="Phone number"
                        name="phoneNumber"
                        value={this.state.phoneNumber}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group col-md-6">
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
                  </div>
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

AddOranization.propTypes = {
  createOrganization: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createOrganization }
)(AddOranization);
