import React, { useContext } from "react";
import { Data } from "../App";
import { Data1 } from "../App";

// const ComponentC = () => {
//   return (
//     <>
//       <Data.Consumer>
//         {(name) => {
//           return (
//             <Data1.Consumer>
//               {(age) => {
//                 return (
//                   <>
//                     <div>Component C</div> <br />
//                     <button>In component C: {name}</button> <br /><br />
//                     <button>Age: {age}</button>
//                   </>
//                 );
//               }}
//             </Data1.Consumer>
//           );
//         }}
//       </Data.Consumer>
//     </>
//   );
// };


const ComponentC = ()=>{
  const userName = useContext(Data)
  const age = useContext(Data1)
  return(
    <>
    <br />
    <button>In component C: {name}</button> <br /><br />
      {userName} <br />
      {age}
    </>
  )
}

export default ComponentC;

