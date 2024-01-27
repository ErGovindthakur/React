import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import Card from './card'
import './app.css'

export function App() {
let myObj = {
  name : "Govind",
  age : 19,
}

  return (
   <>
<div className='flex justify-center items-center bg-zinc-800 text-white w-full h-screen flex-col gap-8'>
<h1 className='bg-purple-800 text-white w-fit flex justify-center items-center text-3xl rounded-md'>Tailwind Testing</h1>
{/* Another items is added here */}

<div className='flex flex-row gap-16'>
<Card name="Hello" btntext = "Click-me" />
<Card  name= "Prabhjot" btntext="Hey Govind"/>
</div>

</div>
   </>
  )
}
