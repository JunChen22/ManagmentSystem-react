import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createSchedule } from "../../actions/scheduleActions";
import classnames from "classnames";
import { Link } from "react-router-dom";

class AddSchedule extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      date: "",
      days: [],
      duration: "",
      errors: {}
    };
    console.log(this.state);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //life cycle hooks
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  //https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
  //https://reactjs.org/docs/forms.html
  //https://medium.com/@bretdoucette/understanding-this-setstate-name-value-a5ef7b4ea2b4
  //https://stackoverflow.com/questions/38558200/react-setstate-not-updating-immediately
  onChange(event) {
    let target = event.target;

    if (target.type === "time") {
      let dayName = target.name.substring(0, target.name.indexOf("-"));
      let timeName = target.name.substring(
        target.name.indexOf("-") + 1,
        target.name.length
      );

      let idxOfDay = -1;
      //find if it exist
      for (var obj in this.state.days) {
        if (this.state.days[obj].day === dayName) idxOfDay = obj;
      }

      //if found
      if (idxOfDay !== -1) {
        this.setState(
          (this.state.days[idxOfDay] = {
            ...this.state.days[idxOfDay],
            [timeName]: target.value
          })
        );
      } else {
        this.state.days.push({
          day: dayName,
          [timeName]: target.value
        });
      }
    } else {
      this.setState({ [target.name]: target.value });
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const newschedule = {
      title: this.state.title,
      date: this.state.date,
      durationWeek: this.state.duration,
      shifts: this.state.days,
      email: this.props.location.state.email
    };
    console.log(newschedule);
    this.props.createSchedule(newschedule, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="schedule">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-8 text-center">Creat schedule</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <label for="title">Title</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.title
                      })}
                      placeholder="title"
                      name="title"
                      value={this.state.title}
                      onChange={this.onChange}
                    />
                    {errors.title && (
                      <div className="invalid-feedback">{errors.title}</div>
                    )}
                  </div>

                  <label for="start_date">Start date</label>
                  <div className="form-group">
                    <input
                      type="date"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.date
                      })}
                      name="date"
                      value={this.state.start_date}
                      onChange={this.onChange}
                    />
                    {errors.start_date && (
                      <div className="invalid-feedback">{errors.date}</div>
                    )}
                  </div>

                  <h6>Duration</h6>
                  <div className="form-group">
                    <select
                      name="duration"
                      value={this.state.value}
                      onChange={this.onChange}
                      className="form-control form-control-lg"
                    >
                      <option disabled selected value>
                        {" "}
                        -- select an option --{" "}
                      </option>
                      <option value="1">One week</option>
                      <option value="2">Two week</option>
                      <option value="4">One month</option>
                      <option value="12">Three month</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <div className="form-row">
                      <label className="col-sm-2 col-form-label">Monday</label>
                      <div className="form-group col-md-3">
                        <input
                          className="form-control"
                          type="time"
                          name="monday-startTime"
                          value={this.state.time}
                          onChange={this.onChange}
                        />
                      </div>
                      _
                      <div className="form-group col-md-3">
                        <input
                          className="form-control"
                          type="time"
                          name="monday-endTime"
                          value={this.state.time}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <label className="col-sm-2 col-form-label">Tuesday</label>
                      <div className="form-group col-md-3">
                        <input
                          className="form-control"
                          type="time"
                          name="tuesday-startTime"
                          value={this.state.time}
                          onChange={this.onChange}
                        />
                      </div>
                      _
                      <div className="form-group col-md-3">
                        <input
                          className="form-control"
                          type="time"
                          name="tuesday-endTime"
                          value={this.state.time}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <label className="col-sm-2 col-form-label">
                        Wednesday
                      </label>
                      <div className="form-group col-md-3">
                        <input
                          className="form-control"
                          type="time"
                          name="wednesday-startTime"
                          value={this.state.time}
                          onChange={this.onChange}
                        />
                      </div>
                      _
                      <div className="form-group col-md-3">
                        <input
                          className="form-control"
                          type="time"
                          name="wednesday-endTime"
                          value={this.state.time}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <label className="col-sm-2 col-form-label">
                        Thursday
                      </label>
                      <div className="form-group col-md-3">
                        <input
                          className="form-control"
                          type="time"
                          name="thursday-startTime"
                          value={this.state.time}
                          onChange={this.onChange}
                        />
                      </div>
                      _
                      <div className="form-group col-md-3">
                        <input
                          className="form-control"
                          type="time"
                          name="thursday-endTime"
                          value={this.state.time}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <label className="col-sm-2 col-form-label">Friday</label>
                      <div className="form-group col-md-3">
                        <input
                          className="form-control"
                          type="time"
                          name="friday-startTime"
                          value={this.state.time}
                          onChange={this.onChange}
                        />
                      </div>
                      _
                      <div className="form-group col-md-3">
                        <input
                          className="form-control"
                          type="time"
                          name="friday-endTime"
                          value={this.state.time}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <label className="col-sm-2 col-form-label">
                        Saturday
                      </label>
                      <div className="form-group col-md-3">
                        <input
                          className="form-control"
                          type="time"
                          name="saturday-startTime"
                          value={this.state.time}
                          onChange={this.onChange}
                        />
                      </div>
                      _
                      <div className="form-group col-md-3">
                        <input
                          className="form-control"
                          type="time"
                          name="saturday-endTime"
                          value={this.state.time}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <label className="col-sm-2 col-form-label">Sunday</label>
                      <div className="form-group col-md-3">
                        <input
                          className="form-control"
                          type="time"
                          name="sunday-startTime"
                          value={this.state.time}
                          onChange={this.onChange}
                        />
                      </div>
                      _
                      <div className="form-group col-md-3">
                        <input
                          className="form-control"
                          type="time"
                          name="sunday-endTime"
                          value={this.state.time}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-2"
                    onSubmit={this.onSubmit}
                  />
                  <Link
                    className="btn btn-primary btn-block mt-2"
                    to="/dashboard"
                  >
                    Cancel
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddSchedule.propTypes = {
  createSchedule: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createSchedule }
)(AddSchedule);
