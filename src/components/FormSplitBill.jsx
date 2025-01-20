import React from "react";

function FormSplitBill() {
  return (
    <form>
      <label htmlFor="">Bill Value</label>
      <input type="text" />
      <label htmlFor="">Your expense</label>
      <input type="text" />
      <label htmlFor="">X's expense</label>
      <input type="text" />
      <select name="" id="">
        who is paying?
        <option value=""></option>
        <option value=""></option>
      </select>
    </form>
  );
}

export default FormSplitBill;
