import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const apps = ["Counter"]
  return (
    <>
        <h1>Roy Learns React</h1>
        <h2>{apps}</h2>
        <ul>
            <li>
                <button onClick={() => setCount(count + 1)}>
                    count is {count}
                </button>
            </li>
            <li>
                <button>
                    Next app
                </button>
            </li>
        </ul>
    </>
  )
}

export default App
