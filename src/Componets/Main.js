import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import Other from "./Other.js";

function Main(props) {
 
  let ARR =
    localStorage.getItem("NotedText") !== null || undefined
      ? JSON.parse(localStorage.getItem("NotedText"))
      : [];
  const [ARRCOPY, setARRCOPY] = useState([]);
  const input = useRef();
 
  function CHACK(ArR) {
    ARR = JSON.parse(JSON.stringify(ArR));
  }
  function ADD(e) {
    input.current.value.replace(/ +/g, "");

    let Chack = false;
    ARR.map((E) =>
      E.Value === input.current.value ? (Chack = true) : (Chack = false)
    );

    if (input.current.value.replace(/ +/g, "").length === 0) {
      return;
    } else if (Chack === true) {
      return;
    }

    ARR.push({ Value: input.current.value });
    input.current.value = "";
    localStorage.setItem("NotedText", JSON.stringify(ARR));

    setARRCOPY((P) => (P = JSON.parse(JSON.stringify(ARR))));
  }
   function EmptyIT(){
     ARR = [];
     setARRCOPY((P) => (P = JSON.parse(JSON.stringify(ARR))));
     localStorage.setItem("NotedText", JSON.stringify(ARR));
  }
  return (
    <>
    <div className="w-full h-full border-2 border-red-600 flex flex-col flex-wrap px-4 py-2 gap-4 items-end">
      <h1 className="w-full text-center">Jatin Vaghela's TODO Application</h1>
      <div className="flex w-full h-fit flex-row gap-4 pl-2">
        <input type="text" className="w-full h-auto border-2 border-red-600" ref={input} placeholder="EnterText"/>
         <button onClick={ADD} className="bg-green-500 focus-within:bg-green-100 p-2" >ADD</button>
      </div>
      
      <Other Arr={ARRCOPY} CHACK={CHACK} EmptyIT={EmptyIT}/>
    </div>
      
      
    </>
  );
}

Main.propTypes = {};

export default Main;
