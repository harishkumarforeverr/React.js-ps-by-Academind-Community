import React, { useState } from "react";

const ExpenseFilter = ({ setFilterDate }) => {
  return (
    <div>
      <select
        onChange={(e) => {
          setFilterDate(e.target.value);
        }}
      >
        <option value="">All</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
      </select>
    </div>
  );
};
export default ExpenseFilter;
