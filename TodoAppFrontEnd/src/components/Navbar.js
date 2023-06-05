import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();

  return (
    <div className='flex justify-between bg-slate-800 text-lg'> 
        <div><h1 className='px-4 py-4  font-bold cursor-pointer hover:text-slate-400 text-white'
       >Foxbash</h1></div>
        <div>
            <button className='px-2 py-2 m-2 mx-5 text-white font-bold bg-green-700 border rounded-r-md'
            onClick={navigate("/addTodo")}>Add todo</button>
        </div>
    </div>
  )
}

export default Navbar