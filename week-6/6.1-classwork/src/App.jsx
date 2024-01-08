import { useState } from "react"

function App() {

  return (
    <>
      <HeaderWithButton></HeaderWithButton>
      <Header title="Maldives"></Header>
    </>
  )
}

// one wat to optimize the code i.e. minize the number of re-renders
// push the state down
// adding this component to minimize the re-renders in our app 
function HeaderWithButton() {
  const [title, setTitle] = useState("India");

  function updateTitle() {
    setTitle("Random number " + Math.random())
  }

  return (
    <>
      <button onClick={updateTitle}>Click me to change title 1</button>
      <Header title={title}></Header>
    </>
  )

}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App
