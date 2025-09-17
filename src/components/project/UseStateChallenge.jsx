import React, { useState } from 'react'
import { step } from 'three/tsl';

const UseStateChallenge = () => {
    const [count, setCount] = useState(0);
    const [step, setStep]= useState(1);

    const handleCountInc = () => {
        setCount(count + step);
    }
    const handleCountDec = () => {
        setCount(count - step);
    }
    const handleReset = () =>{
        setCount(0);
    }
            return (
        <section className='bg-slate-500 rounded-4xl w-4xl h-100 flex '>
            <div className='flex flex-col gap-20 items-center'>
                <div ><h1>useSate Challenge</h1></div>
                <div className='flex flex-col gap-10'>
                    <h3 className=''>Count:{count}</h3>
                    <h3>Step:<input type='number' className='bg-amber-100 text-amber-600 h-7' value={step} onChange={(e)=>setStep(Number(e.target.value))}/></h3>
                    <div className='flex gap-1.5'>
                        <button className='bg-amber-600 rounded-2xl w-60 text-cyan-200 h-15' onClick={handleCountInc} disabled={count>=100}>Increment</button>
                        <button className='bg-amber-600 rounded-2xl w-60 text-cyan-200 h-15' onClick={handleCountDec} disabled={count<=0}>Decrement</button>
                        <button className='bg-amber-600 rounded-2xl w-60 text-cyan-200 h-15' onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </div>
        </section>
    )
    }

    export default UseStateChallenge
