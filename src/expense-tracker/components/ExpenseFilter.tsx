import React from "react";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <>
      <select
        className="form-select"
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="">All categories</option>
        <option value="groceries">Groceries</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
      </select>
    </>
  );
};

export default ExpenseFilter;
