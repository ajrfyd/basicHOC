import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const Person2 = ({ money, moneyIncreaseHandler }) => {

  useEffect(() => {
    return () => {
      console.log(money)
    }
  }, [])


  return (
    <div>
      <h2>Mark is offering ${money}</h2>
      <button onClick={moneyIncreaseHandler}>Increase Money</button>
    </div>
  )
}


export default HOC(Person2, 50);