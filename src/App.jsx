import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])
  const  [text, setText] = useState("")
  const [todoItem, settodoItem] = useState(null)

  const handleClickEvent = ()=>{

    if(todoItem?.id){
      const newItem = {...todoItem, text}
      const index = todos.findIndex(x => x?.id === todoItem?.id)
      const newTodos =  todos.slice()
      newTodos[index] = newItem
      setTodos(newTodos)
      settodoItem(null)

    }else{
      const data = {
        id:todos.length + 1,
        text,
        status: "Pending"
      }
     
      setTodos((prev) => [data,...prev])
    }
    setText("")
  }

  const handleDelete = (id) => {
      setTodos((prev)=> prev.filter(x => x?.id !==id))
  }

  const handleEdit = (id)=>{

    const findTodo =  todos.find(x => x?.id === id)
    settodoItem(findTodo)
    setText(findTodo?.text)

  }

  console.log({todos});

  const handleStatusChange = (id) => {
    console.log({handleStatusChange: id});

    const findTodo =  todos.find(x => x?.id === id)
    let newObj={}
    if(findTodo?.status === "Pending"){
      newObj = {
        ...findTodo,
        status: "Done"
      }

    }else{
      newObj = {
        ...findTodo,
        status: "Pending"
      }

    }
    const index = todos.findIndex(x => x?.id === id)
    const newTodos =  todos.slice()
    newTodos[index] = newObj
    setTodos(newTodos)
    
  }

  return (
    <main>
      <h1>ToDO APP</h1>
      <div className='wrapper'>
        <section className='input-section'>
          <input className='text' type='text' name='' value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleClickEvent} className='btn'>{todoItem?.id? 'Update':'ADD'}</button>
        </section>
        <section className='todo-list'>
          {
            todos.map(x => <TodoItem key={x?.id} {...x} handleDelete={handleDelete} handleEdit={handleEdit} handleStatusChange={handleStatusChange}/>)
          }
        </section>
      </div>
    </main>
  )
}

export default App
