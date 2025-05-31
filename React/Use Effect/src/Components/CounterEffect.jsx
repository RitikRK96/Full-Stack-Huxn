import React, { useEffect, useState } from "react";

// const UseEffectEx1 = () => {
//   const [first, setFirst] = useState(1)
//   useEffect(() => {
//     console.log("Event fired");
    

//   }, [first])

//   return (
//     <>
//       <div>
//         <br /><br /><br />
//         Start: {first}
//         <button onClick={() => setFirst(first + 1)}>Add</button>
//         <button onClick={() => setFirst(first - 1)}>Subs</button>
//       </div>
//     </>
//   )
// }

const CounterEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <div>Count is: {count}</div>
      <button onClick={() => { setCount(count + 1) }}>Add Value</button>
      <button onClick={() => { setCount(count - 1) }}>Remove Value</button>
      {/* <UseEffectEx1 /> */}
    </div>
  );
};

export default CounterEffect;
