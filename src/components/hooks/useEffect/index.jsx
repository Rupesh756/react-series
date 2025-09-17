import React, { useEffect, useState } from 'react'

const ReactUseEffect = () => {
    const[count,setcount]=useState(0);
    const[name,setname]=useState("rupesh");
    useEffect(()=>{
        console.log(name);
    },[name])

    useEffect(()=>{
        document.title=`count:${count}`;
    },[count ])
    // useEffect(()=>{
    //     console.log("count:",count);
    // },[count])

  return (
    <div>
      <h1>Hello useEffect Challenge</h1>
      <span>Count:{count}</span>
      <button className='bg-amber-600 rounded-2xl w-60 text-cyan-200 h-15' onClick={()=>setcount(count+1)} disabled={count>=100}>Increment</button>

      <p>Name:<span>{name}</span></p>

      <input
       type="text"
       value={name} 
       onChange={(e)=>setname(e.target.value)}
      />
    </div>
  )
}

export default ReactUseEffect
