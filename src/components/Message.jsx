import React from "react";
import classes from "./Message.module.css";
function Message(props) {
  return (
    <div>
      {props.items.map((item) => (
        <p
          key={item}
          className={
            item === props.itemName ? classes.selected : classes.notActive
          }
          onClick={() => props.handleClick(item)}
        >
          this is {item}
        </p>
      ))}
    </div>
  );
}

export default Message;
