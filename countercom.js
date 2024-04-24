import {useState} from 'react'
function Countercom() {
   const [count, setCount] = useState(0)
   const increment = () =>
    setCount(count+1);
    const decrement = () =>
    setCount(count-1)
    
    
  return (
    
    <>

      <button onClick= {increment} className='increment'>+</button>
      
      <button onClick= {decrement} className='decrement'>-</button>
     
    
      <h1>{count}</h1>
      
    </>
  )
}

export default Countercom;
