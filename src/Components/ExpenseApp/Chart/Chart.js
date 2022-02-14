import React from "react";
import ChartBar from "./ChartBar";

const Chart = ({ DataPoints }) => {
  const dataPointsValue = DataPoints.map(({ value }) => value);
  const max = Math.max(...dataPointsValue);
  // console.log("max", dataPointsValue, max);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {DataPoints.map(({ value, label }) => {
        return (
          <ChartBar value={value} maxValue={max} label={label} key={label} />
        );
      })}
    </div>
  );
};
export default Chart;
