import React, { useContext } from "react";
import ToggleContext from "./ToggleContext";

function Toggle({ name }) {
  const [activeArr, setActiveArr] = useContext(ToggleContext);
  function handleClick() {
    if (activeArr.includes(name)) {
      setActiveArr((old) => old.filter((e) => e !== name));
    } else {
      setActiveArr((old) => {
        let newArr = [...old];
        if (newArr.length === 2) {
          if (name === "GOOD") {
            newArr = newArr.filter((e) => e !== "CHEAP");
          } else {
            if (name === "CHEAP") {
              newArr = newArr.filter((e) => e !== "FAST");
            } else {
              if (name === "FAST") {
                newArr = newArr.filter((e) => e !== "GOOD");
              }
            }
          }
        }
        return [...newArr, name];
      });
    }
  }
  return (
    <div
      className={`${name} toggle ${activeArr.includes(name) ? "active" : ""}`}
    >
      <div className="slider">
        <button className="ball" onClick={handleClick}></button>
      </div>
      <span>{name}</span>
    </div>
  );
}

export default Toggle;
