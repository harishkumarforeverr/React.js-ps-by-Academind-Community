import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = ({ Expense }) => {
  const DataPoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "july", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];
  for (const expense of Expense) { 
    const expenseMonth = expense.date.getMonth(); 
    DataPoints[expenseMonth].value += parseInt(expense.amount, 10);
  }
  console.log(DataPoints);
  return (
    <div>
      <Chart DataPoints={DataPoints} />
    </div>
  );
};
export default ExpenseChart;
