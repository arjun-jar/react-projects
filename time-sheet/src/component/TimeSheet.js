import React, { useEffect, useState } from "react";
import TimeSheettable from "./TimeSheettable";

function TimeSheet() {
  const [date, setdate] = useState(new Date().toISOString().slice(0, 10));
  const [dateAndMonth, setDateAndMonth] = useState([]);
  const [value, setValue] = useState("9:00");
  const dateMonth = new Array(7).fill(null);
  const slots = new Array(14).fill(null);

  useEffect(() => {}, [date]);

  return (
    <div className="time-sheet">
      <div className="container">
        <div className="timesheet-container">
          <div className="nav-slots">
            <div className="nav-slot slot-left">
              <div className="date-field">
                <div>
                  <input
                    className="date-field-input"
                    type="date"
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                  ></input>
                </div>

                <div className="totle-time">
                  <div>
                    <h2>{value}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-slot slot-right">
              <div className="days-slot">
                {days.map((day, i) => (
                  <div className={`day-${i + 1}`}>
                    <span className="day">{day.toUpperCase()}</span>
                    <input type="Checkbox"></input>
                  </div>
                ))}
              </div>
              <div className="dates-slot">
                {dateMonth.map((d, i) => (
                  <div className={`date-${i + 1}`}>
                    <span className="date">
                      {monthNames[new Date(date).getMonth()] +
                        " " +
                        JSON.stringify(new Date(date).getDate() + i)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="main-slots">
          <div className="slot-left">
            <div className="button-group">
              <button onClick={() => alert("SAVING...")}>save</button>
              <button onClick={() => alert("SUBMITTING...")}>submit</button>
            </div>
            <TimeSheettable />
          </div>
          <div className="slot-right">
            <div className="time-slot">
              <div className="time-slot-container">
                {dateMonth.map((date, i) => (
                  <div className={`time time-${i + 1}`}>
                    <span className="time-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sub-slot">
              {slots.map((n, i) => (
                <input
                  maxLength="4"
                  type="text"
                  className={`input-slot input-slot-${i + 1}`}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                ></input>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeSheet;
const days = ["Sun", "Mon", "Tue", "Wed", "Thu ", "Fri", "Sat"];
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
