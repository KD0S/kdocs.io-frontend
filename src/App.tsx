import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div id="doc-canvas" className='w-[550px] h-[44px] bg-blue-100 rounded-lg shadow-md p-4 absolute left-1/2 top-10 transform -translate-x-1/2 -translate-y-1/2'>tool-box</div>
      <canvas></canvas>
    </main>
  )
}

export default App
