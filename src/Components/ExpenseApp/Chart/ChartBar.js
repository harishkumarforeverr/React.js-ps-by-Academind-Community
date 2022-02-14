import React from "react";

const ChartBar = ({ value, maxValue, label }) => {
  if (value > 0) {
    value = Math.round((value / maxValue) * 100);
  }
  value += "%";
  return (
    <div className="outer">
      <div
        style={{
          height: "7rem",
          background:"red", 
          width:"3rem",
          display:"grid",

        }}

        className="inner"
      >
        <div
          className="fill"
          style={{
            height: value,
            background: "blue",
            width:"100%",
            marginTop:"auto"
          }}
        ></div>
      </div>
      <div className="label">{label}</div>
    </div>
  );
};
export default ChartBar;
