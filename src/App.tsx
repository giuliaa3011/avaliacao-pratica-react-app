import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Olá, seja bem-vindo(a) à minha Prática React!</h1>

      <div className="contador">
        <p>Contador atual: <strong>{count}</strong></p>
        
        <button className="counter-button" onClick={() => setCount(count + 1)}>Aumentar o número</button>
      </div>
    </div>
  )
}

export default App