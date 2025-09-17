import {useState} from 'react'

export const State =()=> {
    // let value=0;
    // const handleButtonClick = ()=>{
    //     value++;
    //     console.log(value);
    // }

    const [count, setCount] = useState(0);
    const handleButtonClick = ()=>{
        setCount(count+1);
        }
  return (
    <>
    <section className='flex flex-col justify-center items-center w-screen h-screen'>    
      <h1>{count}</h1>
      <button onClick={handleButtonClick} className='bg-amber-400 rounded-xl w-xl h-8 flex flex-col justify-center items-center '>Increment</button>
      </section>
    </>
  )
}


