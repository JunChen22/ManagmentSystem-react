import React, { Component } from "react";
import "../../App.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

const eventList = [
  { title: "test shift", date: "2019-10-21" },
  {
    title: "morning shift",
    date: "2019-10-25"
  }
];

class Calendar extends Component {
  render() {
    console.log(eventList);
    return (
      <div className="container">
        <FullCalendar
          header={{
            left: "title",
            center: "dayGridMonth,timeGridWeek",
            right: "today prev,next "
          }}
          timeZone={"America/New_York"}
          defaultView="dayGridMonth"
          plugins={[timeGridPlugin, dayGridPlugin]}
          height={600}
          //timeFormat={"hh:mm"}
          events={eventList}
        />
      </div>
    );
  }
}

export default Calendar;
