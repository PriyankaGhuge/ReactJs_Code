import React from 'react'
import { useState } from 'react';


const Content = () => {
    const [name, setName] = useState('Dave');
    const [count, setCount] = useState(0);
    const handleNameChange = () => {
        const names =["Priyanka", "Dave", "Kevin"];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
      }
      
      const handleClick = () => {
        setCount(count+1)
        setCount(count+1)
        console.log(count)
      }

      const handleClick2 = (name) => {
        console.log(count)
        //console.log(`${name} was clicked`)
      }
  return (
    <main>
      <p onDoubleClick={handleClick}>
          Hello {name}!
      </p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click it</button>
      <button onClick={handleClick2}>Click it</button>
    </main>
  )
}

export default Content
