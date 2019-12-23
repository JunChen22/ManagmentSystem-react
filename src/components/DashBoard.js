import React, { Component } from "react";
import Schedule from "./Schedule/Schedule";
import { connect } from "react-redux";
import { getSchedules } from "../actions/scheduleActions";
import PropTypes from "prop-types";
import "../App.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import CreateScheduleForm from "./Schedule/CreateScheduleForm";

class DashBoard extends Component {
  componentDidMount() {
    this.props.getSchedules();
  }

  render() {
    const { schedules } = this.props.schedule;

    const eventList = [];
    for (let i = 0; i < schedules.length; i++) {
      eventList.push({
        title: schedules[i].title,
        date: schedules[i].date
        //description: "test desp",
        //startTime: schedules[i].startTime,
        //endTime: schedules[i].endTime
      });
    }
    return (
      <div className="schedules">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">schedules</h1>
              <br />

              <br />
              <hr />
              {schedules.map(schedule => (
                <Schedule key={schedule.id} schedule={schedule} />
              ))}

              <div className="container">
                <FullCalendar
                  header={{
                    left: "title",
                    center: "dayGridMonth,timeGridWeek",
                    right: "today prev,next "
                  }}
                  defaultView="dayGridMonth"
                  plugins={[timeGridPlugin, dayGridPlugin]}
                  height={600}
                  events={eventList}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DashBoard.propTypes = {
  schedule: PropTypes.object.isRequired,
  getSchedules: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  schedule: state.schedule
});

export default connect(
  mapStateToProps,
  { getSchedules }
)(DashBoard);
