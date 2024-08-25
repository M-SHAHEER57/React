import { useState } from "react";
function App(params) {
  
  let [num , setNum] = useState(0);

  function count () {
    
    setNum(num + 1)

  }
  function countdec () {
    if (num == 0) {
      
    } else {
      
      setNum(num - 1)
    }

  }

return(
  <>
  <h1>Hello world {num}  </h1>
<button onClick={count}> INC {num} </button>
<button onClick={countdec}> DEC {num} </button>
  </>
)

}

export default App ;
