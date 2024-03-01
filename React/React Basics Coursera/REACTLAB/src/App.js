import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
    inputRef.current.value = ""; // Clear input after calculation
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
    inputRef.current.value = ""; // Clear input after calculation
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    inputRef.current.value = ""; // Clear input after calculation
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
    inputRef.current.value = ""; // Clear input after calculation
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = ""; // Clear input
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0); // Reset result to 0
    inputRef.current.value = ""; // Clear input
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;



// Start of my code
// import {
//   useState,
//   useRef
// } from "react"; 
// import "./App.css";

// function App() { 
//   const inputRef = useRef(null); 
//   const resultRef = useRef(null); 
//   const [result, setResult] = useState(0); 
 
//   function plus(e) { 
//     e.preventDefault(); 
//     setResult((result) => result + Number(inputRef.current.value));
//   }; 
 
//   function minus(e) { 
//   	e.preventDefault(); 
//     setResult((result) => result - Number(inputRef.current.value));
//   };
 
//   function times(e) { 
//     e.preventDefault(); 
//     setResult((result) => result * Number(inputRef.current.value));
//   }; 
 
//   function divide(e) { 
//     e.preventDefault(); 
//     setResult((result) => result / Number(inputRef.current.value));
//   };
 
//   function resetInput(e) { 
//     e.preventDefault(); 
//     inputRef.current.value = null
//   }; 
 
//   function resetResult(e) { 
//     e.preventDefault();
//     setResult(0)
//     resultRef.current.value = 0 
//   }; 
 
//   return ( 
//     <div className="App"> 
//       <div> 
//         <h1>Simplest Working Calculator</h1> 
//       </div> 
//       <form> 
//         <p ref={resultRef}> 
//           {result} 
//         </p> 
//         <input
//           pattern="[0-9]" 
//           ref={inputRef} 
//           type="number" 
//           placeholder="Type a number" 
//         /> 
//         <button onClick={plus}>add</button>
//         <button onClick={minus}>subtract</button>
//         <button onClick={times}>multiply</button>
//         <button onClick={divide}>divide</button>
//         <button onClick={resetInput}>reset input</button>
//         <button onClick={resetResult}>reset result</button>
//       </form> 
//     </div> 
//   ); 
// } 
 
// export default App; 
// End of my code
