import { useState } from "react";

// cannot use state like this as react is not watching this and re-rendering the components
// let state = {
//   count : 0
// }

function App() {
  const [count, setCount] = useState(0);

  // First Method
  // function onClickHandler() {
  //   setCount(count + 1)
  // }

  // return (
  //   <div>
  //     <button onClick={onClickHandler}>Counter {count}</button>
  //   </div>
  // )

  // Second Method
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <CustomButton count={count + 1} setCount={setCount}></CustomButton>
      <CustomButton count={count + 2} setCount={setCount}></CustomButton>
    </div>
  )
}

//component
function CustomButton(properties) {

  function onClickHandler() {
    properties.setCount(properties.count + 1);
  }

  return (
    <button onClick={onClickHandler}>Counter {properties.count}</button>
  )
}

export default App
