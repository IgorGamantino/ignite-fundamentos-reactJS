import { useState } from "react"

export default function Counter(){
 const [counter,setCounter] = useState(0)

 function icrementCounter() {
   setCounter(counter + 2)
 }

  return (
     <div>
       <h2>{counter}</h2>
       <button type='button' onClick={icrementCounter}>Icremente {counter}</button>
     </div>
  )
}
