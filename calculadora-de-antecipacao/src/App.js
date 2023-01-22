import Main from "./components/Main/index.jsx";
import Aside from "./components/Aside/index";
import "./App.css";
import { useState } from "react";

function App() {
  

  const [value1, setValue1] = useState("");
  const [value15, setValue15] = useState("");
  const [value30, setValue30] = useState("");
  const [value90, setValue90] = useState("");
  
  return (
    <div className="App">
      <Main setValue1={setValue1} setValue15={setValue15} setValue30={setValue30} setValue90={setValue90}/>
      <Aside value1={value1} value15={value15} value30={value30} value90={value90} />
    </div>
  );
}

export default App;

// import Main from "./components/Main/index";
// import Aside from "./components/Aside/index";

// // import GlobalStyle from "./styles/global";
// import React from "react";

// function App() {
//   return (
//     <>
//       <h1>oi</h1>
//     </>
//   );
// }

// export default App;
