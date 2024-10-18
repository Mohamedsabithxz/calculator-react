import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [result,setResult]= useState("")
 const handleClick = (value)=>{
  setResult((prevInput) => prevInput+value)
 }
 const handleClear = (value)=>{
  setResult("")
 }
 const handleequal = (value)=>{
  setResult(eval(result))
 }
 
  

  return (
    <>
   
    <div style={{width:'500px',height:'600px'}}className='bg-dark container d-flex justify-content-center align-items-center my-5 '>
      <div style={{width:'400px',height:'500px'}} className='bg-light rounded-2'>
        <div className='bg-light fw-bolder'style={{alignItems:'center',display:'flex',justifyContent:'center', }}>
          <div style={{width:'350px',height:'100px'}} className='bg-dark roundecd-2 mt-2 text-light' type="text">{result}</div>
          </div>
          <div style={{width:'300px',height:'200px'}} className=' m-5 p-2 justify-content-between '>
            <button onClick={()=>handleClick("9")} className='p-4 m-1  rounded-2'>9</button>
            <button  onClick={()=>handleClick("8")} className='p-4 m-1  rounded-2'>8</button>
            <button  onClick={()=>handleClick("7")} className='p-4 m-1  rounded-2'>7</button>
            <button  onClick={()=>handleClick("*")} className='p-4 m-1  rounded-2'>*</button>
            <button  onClick={()=>handleClick("6")} className='p-4 m-1  rounded-2'>6</button>
            <button  onClick={()=>handleClick("5")} className='p-4 m-1  rounded-2'>5</button>
            <button  onClick={()=>handleClick("4")} className='p-4 m-1  rounded-2'>4</button>
            <button  onClick={()=>handleClick("+")} className='p-4 m-1  rounded-2'>+</button>
            <button  onClick={()=>handleClick("3")}  className='p-4 m-1  rounded-2'>3</button>
            <button  onClick={()=>handleClick("2")} className='p-4 m-1  rounded-2'>2</button>
            <button  onClick={()=>handleClick("1")} className='p-4 m-1  rounded-2'>1</button>
            <button  onClick={()=>handleClick("-")} className='p-4 m-1  rounded-2'>-</button>
            <button  onClick={()=>handleClick("0")} className='p-4 m-1  rounded-2'>0</button>
            
            <button  onClick={()=>handleequal("")} className='p-4 m-1  rounded-2'>=</button>
            <button  onClick={()=>handleClick("/")} className='p-4 m-1 rounded-2'>/</button>
            <button  onClick={()=>handleClear("")} className='p-3 m-1  rounded-2'>Clr</button>
            

          </div>
          
        
      </div>
    </div>
    
    </>
  )
}

export default App
