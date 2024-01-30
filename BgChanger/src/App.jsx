import { useState } from 'react'



function App() {
 let [Color,setColor] = useState("olive")

  return (
  <>
  <div className='w-full h-screen text-white' style={{background:Color}}>
  {/* starting of main div  */}
   <h1 className=' flex justify-center items-center text-2xl w-full h-screen ' >Background Changer Via React</h1>
    <div className=' flex flex-wrap justify-center items-center'>

     <div className='flex flex-wrap fixed justify-center items-center bottom-12'>
      <div className='flex flex-wrap justify-center items-center bottom-12 bg-white rounded-full inset-x-0 px-2 py-2 gap-5'>
        {/* button container is here */}
        <button className='px-4 py-1  rounded-full felx flex-wrap gap-9' style={{background:"red", color:"white"}}
        onClick={() => setColor("red")}
        >Red</button>
        <button className='px-4 py-1   rounded-full felx flex-wrap gap-9' style={{background:"green", color:"white"}}
        onClick={() => setColor("green")}
        >Green</button>
        <button className='px-4 py-1  rounded-full felx flex-wrap gap-9' style={{background:"blue", color:"white"}}
        onClick={() => setColor("blue")}
        >Blue</button>
        <button className='px-4 py-1   rounded-full felx flex-wrap gap-9' style={{background:"orange", color:"white"}}
        onClick={() => setColor("orange")}
        >Orange</button>
        <button className='px-4 py-1 rounded-full flex flex-wrap' style={{background:"hotpink",color:"white"}}
        onClick={() => setColor("hotpink")}>Hotpink</button>
        <button className='px-4 py-1 rounded-full flex flex-wrap' style={{background:"royalblue",color:"white"}}
        onClick={() => setColor("royalblue")}>Royalblue</button>
      </div>
     </div>

    </div>

    {/* End of main div */}
    </div>
  </>
  )
}

export default App
