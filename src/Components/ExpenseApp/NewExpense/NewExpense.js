import React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = ({HandleTheFormSubmit}) => {
  return (
    <div>
      {" "}
      <div>
        <ExpenseForm HandleTheFormSubmit={HandleTheFormSubmit} />
      </div>
    </div>
  );
};
export default NewExpense;
