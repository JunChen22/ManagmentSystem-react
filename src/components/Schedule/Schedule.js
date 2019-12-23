import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteSchedule } from "../../actions/scheduleActions";

class Schedule extends Component {
  render() {
    const { schedule } = this.props;
    return <div className="container"></div>;
  }
}

export default Schedule;
