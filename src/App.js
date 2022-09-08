import { createContext, useState } from "react";
import Child from "./component/Hooks/Child";
import OtherChild from "./component/Hooks/OtherChild";
import SearchData from "./component/SearchData";
import TableData from "./component/TableData";

export const Global=createContext();

function App() {
  
  return (
    <div>
      <SearchData/>
    </div>
  );
}

export default App;
