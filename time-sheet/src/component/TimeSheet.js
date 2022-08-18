import React, { useEffect, useState } from "react";
import TimeSheettable from "./TimeSheettable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import DatesComponet from "./DatesComponet";

function TimeSheet() {
  const [date, setdate] = useState(new Date().toISOString().slice(0, 7));
  const [saven, setSaven] = useState();
  const [yearAndMonth, setYearAndMonth] = useState([]);
  const [value, setValue] = useState("9:00");
  const dateMonth = new Array(7).fill(null);
  const [lastDate, setLastDate] = useState(0);

  let slots = new Array(lastDate).fill(null);

  useEffect(() => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    console.log(year, month);
    let array = getDaysInMonth(month - 1, +year);
    setLastDate(() => array.length);
    setYearAndMonth(() => array);
  }, [date]);

  function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    console.log(days);
    return days;
  }
  return (
    <div className="time-sheet">
      <div className="container">
        <div className="nav-slots">
          <div className="nav-slot slot-left">
            <div className="date-field">
              <div>
                <input
                  className="date-field-input"
                  type="month"
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
            <div className="week-field" id="style-9">
              {yearAndMonth.map((date, i) => (
                <div className={`week day-${i + 1}`}>
                  <span className="day">
                    {date.toLocaleDateString("locale", {
                      weekday: "short",
                    })}
                  </span>
                  <div className="week">
                    {date.toLocaleString("default", { month: "short" })}{" "}
                    {date.getDate()}
                  </div>
                </div>
              ))}
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
            <div className="sub-slot" id="style-9">
              {slots.map((n, i) => (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ textAlign: "center" }}>
                    <h6 className="number">{i + 1}</h6>
                  </div>
                  <div>
                    <input
                      maxLength="4"
                      type="text"
                      className={`input-slot input-slot-${i + 1}`}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    ></input>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeSheet;
