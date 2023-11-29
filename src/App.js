import classes from "./App.module.css";
import Message from "./components/Message";
import { Fragment, useState } from "react";
function App() {
  // const items = ["coimbatore", "chennai", "mumbai"];
  // const [itemName, setItemName] = useState("chennai");
  // const handleClick = (item) => {
  //   setItemName(item);
  // };
  // if (items.length === 0) {
  //   return <p>Notjing to show</p>;
  // }
  const [alert, setAlert] = useState("Alert");
  const handleClick = () => {
    setAlert("Alert");
  };
  const handleClose = () => {
    setAlert("");
  };
  return (
    <Fragment>
      <h1>hello world</h1>
      <div className={classes.App}>
        {alert.length >= 1 ? (
          <>
            <button onClick={handleClose}>X</button>
            <header>Learn React</header>
            <header>Learn React</header>
            <header>Learn React</header>
            <header>Learn React</header>
            <header>Learn React</header>
            <header>Learn React</header>
            <p>Alert</p>
            <p>Alert</p>
            <p>Alert</p>
          </>
        ) : null}

        <Message clicked={() => handleClick()} />
        {/* <Message
          items={items}
          itemName={itemName}
          handleClick={(item) => handleClick(item)}
        />
        <Message
          items={items}
          itemName={itemName}
          handleClick={(item) => handleClick(item)}
        />
        {items.length !== 3 ? <p>There is more to learn</p> : <p>saranua</p>} */}
      </div>
    </Fragment>
  );
}

export default App;
