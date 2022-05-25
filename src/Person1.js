import React, { useState, useEffect } from "react";
import HOC from "./HOC";

const Person1 = ({ money, moneyIncreaseHandler }) => {
  useEffect(() => {
    console.log('Render')

    return () => {
      console.log('%cUnmount!!!', 'color: red', money)
    }
  }, [money])

  return (
    <div>
      <h2>Jimmy is offering ${money}</h2>
      <button onClick={moneyIncreaseHandler}>Increase Money</button>
    </div>
  )
}
export default HOC(Person1, 10);