import { Profiler } from 'react'
import Nav from '../components/Nav'
import ToDo from '../components/ToDo'
import Filter from '../components/Filter'
import ToDoList from '../components/ToDoList'

export default function Home() {
  return (
    <Profiler id="home">
      <div className="App">
        <Nav />
        <div className="todo-container">
          <h1 className="mb-4">To-Do List</h1>
          <ToDo />
          <Filter />
          <ToDoList />
        </div>
      </div>
    </Profiler>
  )
}
