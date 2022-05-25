import React, { useEffect, useState } from "react";
import Person1 from "./Person1";
import Person2 from "./Person2";


const App = () => {
  const [visible, setVisible] = useState(false);

  const visibleHandler = () => setVisible(prev => !prev);
    
  return (  

    <div id='app'>
      <h1>Auction</h1>
      {
        visible && (
          <>
            <Person1 />
            <Person2 />
          </>
        )
      }
      <button onClick={visibleHandler}>Click</button>
    </div>
  )
}

export default App;