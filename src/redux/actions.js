// src/redux/actions.js
export const addTask = (text) => ({
  type: 'ADD_TASK',
  payload: { text },
});

export const removeTask = (index) => ({
  type: 'REMOVE_TASK',
  payload: { index },
});

export const toggleCompleted = (index) => ({
  type: 'TOGGLE_COMPLETED',
  payload: { index },
});

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: { filter },
});
