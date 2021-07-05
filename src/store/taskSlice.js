import { createSlice, nanoid, createAction} from "@reduxjs/toolkit";

const createTask = (title) => ({
  id: nanoid(),
  title,
  complete: false,
  assignedTo: ''
})

const initialState = [
  createTask('Water plants'),
  createTask('Do dishes')
]

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    add:(state, action) => {
      const task = createTask(action.payload)
      state.push(task)
    },
    toggle: (state, action) => {
      const task = state.find(task => task.id === action.payload.taskId)
      task.completed = action.payload.completed
    },
    assignToUser: (state, action) => {
      const task = state.find((task) => task.id ===action.payload.taskId)
      task.assignedTo = action.payload.humanId
    }
  }
})

export const toggleTask = createAction('task/toggle',(taskId, completed) => ({
  payload: {
    taskId,
    completed
  }
}))
