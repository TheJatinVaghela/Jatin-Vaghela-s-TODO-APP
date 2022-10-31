import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
const Other = (props) => {
  let Chack;
  let ARR =
    localStorage.getItem("NotedText") !== null || undefined
      ? JSON.parse(localStorage.getItem("NotedText"))
      : props.Arr;
  const [Count, setCount] = useState(0);
  console.log(ARR);

  function DELT(e) {
    let Perent = e.nativeEvent.path[1];
    let Chideh1 = e.nativeEvent.path[1].children[0];

     Chack = ARR.filter(
      (E) => E.Value.replace(/ +/g, "") != Chideh1.innerText.replace(/ +/g, "")
    );
   

    ARR = JSON.parse(JSON.stringify(Chack));
    props.CHACK(Chack);
    localStorage.setItem("NotedText", JSON.stringify(ARR));
    setCount((P) => (P += 1));
   
  } 
   function Clear(){
    ARR = []
    localStorage.setItem("NotedText" , JSON.stringify(ARR));
    setCount((P) => (P -= 1));
    props.EmptyIT("YES");
    
   }
  return (
    <>
      {ARR &&
        ARR.map((E, index) => {
          return (
            <div
              key={index}
              id={index}
              className="flex flex-row gap-5 border-y-2 justify-between pl-2 align-middle w-full"
            >
              <h1 >{E.Value}</h1>
              <button className="p-2 bg-red-500 focus-within:bg-red-100" onClick={DELT}>
                DELT
              </button>
            </div>
          );
        })}
        <button className="bg-red-500 focus-within:bg-red-100 p-2 w-fit" onClick={Clear}>Clear</button>
    </>
  );
};

Other.propTypes = {};

export default Other;
