import React, { useState } from "react";

const HOC = (Component, m) => {
  const NewComponent = () => {
    const [money, setMoney] = useState(m);

    const moneyIncreaseHandler = () => setMoney(prev => prev + m);
    return <Component money={money} moneyIncreaseHandler={moneyIncreaseHandler}/>
  }

  return NewComponent;
}

export default HOC;