import { useState } from 'react'

function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "todo 1",
    description: "desc 1"
  }, {
    id: 2, 
    title: "todo 2",
    description: "desc 2"
  }, {
    id: 3,
    title: "todo 3",
    description: "desc 3"
  }])

  function addTodo() {
    setTodos([...todos, {
      id: 4,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {/* easy way */}
      {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>
      <Todo title={todos[1].title} description={todos[1].description}></Todo>
      <Todo title={todos[2].title} description={todos[2].description}></Todo> */}

      {/* second way */}
      {/* {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description}></Todo>
      })} */}

      {/* arrow function */}
      {todos.map(todo => <Todo title={todo.title} description={todo.description}></Todo>)}
    </div>
  )
}

export default App
