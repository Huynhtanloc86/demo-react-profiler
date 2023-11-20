import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/actions'

export default function ToDo() {
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask(newTask))
      setNewTask('')
    }
  }

  return (
    <div className="input-group mb-3 todo-input">
      <input
        type="text"
        className="form-control"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button" onClick={handleAddTask}>
          Add
        </button>
      </div>
    </div>
  )
}
