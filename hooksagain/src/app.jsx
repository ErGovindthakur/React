import {useState} from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
 let [Counter, setCounter] = useState(8);
 // Function creation for Addition of value 
 let AddValue = () => {
  setCounter(Counter + 1);
  setCounter((prop) => prop+1)
  setCounter((prop) => prop+1)
  setCounter((prop) => prop+1)
  setCounter((prop) => prop+1)
  // setCounter(Counter + 1);
 }

 // Function creation for Deletion of value 
 let RemoveValue = () => {
  setCounter(Counter - 1);
  setCounter((del) => del-1);
  setCounter((del) => del-1);
  setCounter((del) => del-1);
  setCounter((del) => del-1);
 }

  return (
   <>
    <h2>Hooks concept practice through interview question {Counter}</h2>
    {/* Button creation for increasing and decreasing the value */}
    <button
    onClick={AddValue}
    >Add-Value {Counter}</button>
    <button
    onClick={RemoveValue}
    >Remove-Value {Counter}</button>
    <p>Footer -: {Counter}</p>
   </>
  )
}
