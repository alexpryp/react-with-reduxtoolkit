import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from '@/components/gallery/Gallery'
import TodoList from '@/components/todolist/TodoList'
import TodoListGregorio from '@/components/todolist/TodoListGregorio'
import Profile2 from '@/components/profile/Profile2'
import Form from '@/components/profile/Form'
import Form2 from '@/components/profile/Form2'
import PackingList from '@/components/checkList/CheckList'
import RenderList from '@/components/renderList/RenderList'
import Counter from './features/counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="react-tutorial">
        <RenderList />
        <PackingList />
        <Profile2 />
        <TodoListGregorio />
        <TodoList />
        <Gallery />
        <Form />
        <Form2 />
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Counter />
    </>
  )
}

export default App
