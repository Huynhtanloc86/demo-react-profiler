import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTask, toggleCompleted } from '../redux/actions'

export default function ToDoList() {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks)
  const filter = useSelector((state) => state.filter)

  const handleRemoveTask = (index) => {
    dispatch(removeTask(index))
  }

  const handleToggleCompleted = (index) => {
    dispatch(toggleCompleted(index))
  }

  // const fibonacci = (n) => {
  //   if (n <= 1) {
  //     return
  //   }
  //   return fibonacci(n - 1) + fibonacci(n - 2)
  // }
  // const result = fibonacci(35)

  // const result = useMemo(() => fibonacci(35), [])

  return (
    <ul className="todo-list">
      {tasks
        .filter((task) => {
          if (filter === 'completed') return task.completed
          if (filter === 'active') return !task.completed
          return true
        })
        .map((task, index) => (
          <li key={index} className="todo-item">
            <input type="checkbox" checked={task.completed} onChange={() => handleToggleCompleted(index)} />
            <span
              className={`task-text ${task.completed ? 'completed' : ''}`}
              onClick={() => handleToggleCompleted(index)}
            >
              {task.text}
            </span>
            <button className="btn btn-danger remove-btn" onClick={() => handleRemoveTask(index)}>
              Remove
            </button>
          </li>
        ))}
    </ul>
  )
}
