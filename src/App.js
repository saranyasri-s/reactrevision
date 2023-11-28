import classes from "./App.module.css";
import Message from "./components/Message";
import { Fragment } from "react";
function App() {
  const items = ["coimbatore", "chennai", "mumbai"];
  if (items.length === 0) {
    return <p>Notjing to show</p>;
  }
  return (
    <Fragment>
      <h1>hello world</h1>
      <div className={classes.App}>
        <header>Learn React</header>
        <header>Learn React</header>
        <header>Learn React</header>
        <header>Learn React</header>
        <header>Learn React</header>
        <header>Learn React</header>
        {items.map((item) => (
          <p key={item}>this is {item}</p>
        ))}
        <Message />
        {items.length !== 3 ? <p>There is more to learn</p> : <p>saranua</p>}
      </div>
    </Fragment>
  );
}

export default App;
