"use client"
import { useState } from 'react'
import StartCounting from './server'
import {start, stop} from './server'




export default function Home() {




 const [waiting, setWaiting] = useState(false)
 const [res, setRes] = useState(0)
 const [end, setEnd] = useState(0)
 


  return (
<div suppressHydrationWarning className='bg-white min-h-screen text-black p-8'>
  <form action="">
    <label htmlFor="">
      <input type="number" className='w-32 h-6 border-2 ' onChange={(e)=>{setEnd(e.target.valueAsNumber)}}/>
    </label>
  </form>
  <button onClick={async()=>{await start()}} className='hover:bg-opacity-25 h-6 w-max px-4 bg-green-400'>Start</button>
  <button onClick={async()=>{await stop()}} className='hover:bg-opacity-25 h-6 w-max px-4 bg-red-400'>Stop</button>
  <p>{res}</p>
  <div className={`px-4 h-6 w-max ${waiting ? 'bg-gray-200': ' bg-gray-400'} hover:bg-gray-200 `} onClick={async ()=>{
    setWaiting(true);
    console.time();
    setRes(await StartCounting(end))
    console.log(res);
    setWaiting(false);
    console.timeEnd();
  }} >start process</div>
</div>
  )
}
