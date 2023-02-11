import React, { useEffect, useState } from 'react'

export default function Lifecycle() {

    const [count , setCount] = useState(0);
    const [text, setText] = useState('')

    useEffect(() => {
        console.log('mount')
},[])
  return (
    <div style={{padding: 20}}>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
        <div>
            <input value={text} onChange={(e)=>setText(e.target.value)}></input>
        </div>
    </div>
  )
}
