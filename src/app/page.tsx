"use client"
import { useState } from 'react'
import StartCounting from './server'




export default function Home() {




 const [waiting, setWaiting] = useState(false)
 const [res, setRes] = useState(0)

 


  return (
<div suppressHydrationWarning className='bg-white min-h-screen text-black p-8'>
  <p>{res}</p>
  <div className={`px-4 h-6 w-max ${waiting ? 'bg-gray-200': ' bg-gray-400'} hover:bg-gray-200 `} onClick={async ()=>{
    setWaiting(true);
    setRes(await StartCounting())
    console.log(res)
    setWaiting(false);
  }} >start process</div>
</div>
  )
}
