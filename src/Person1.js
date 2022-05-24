import React, { useState } from "react";
import HOC from "./HOC";

const Person1 = ({ money, moneyIncreaseHandler }) => {

  return (
    <div>
      <h2>Jimmy is offering ${money}</h2>
      <button onClick={moneyIncreaseHandler}>Increase Money</button>
    </div>
  )
}
export default HOC(Person1, 10);