import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Padre } from './07-tarea-memo/Padre'
import './08.-useReduce/intro-reducer'
import { TodoApp } from './08.-useReduce/TodoApp'
createRoot(document.getElementById('root')).render(
//   // <StrictMode>
    <TodoApp/>
//   </StrictMode>
)
