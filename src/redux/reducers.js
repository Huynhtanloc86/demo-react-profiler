// src/redux/reducers.js
const initialState = {
  tasks: [
    { text: 'Đá Banh ngày thứ ba', completed: false },
    { text: 'Chạy bộ tối thứ 5', completed: false },
    { text: 'Đi xem phim tối thứ 7', completed: false },
    { text: 'Đi nhậu cuối tuần', completed: false },
  ],
  filter: 'all',
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, { text: action.payload.text, completed: false }],
      }

    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload.index),
      }

    case 'TOGGLE_COMPLETED':
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload.index ? { ...task, completed: !task.completed } : task,
        ),
      }

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload.filter,
      }

    default:
      return state
  }
}

export default todoReducer
