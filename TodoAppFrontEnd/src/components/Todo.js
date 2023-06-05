import React from 'react'
import { useEffect, useState } from "react";
import AppService from "../service/AppService";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
      useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await AppService.getTodos();
                setTodos(response.data);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
     

    
    const deleteElement = (id) =>{
      AppService.removeTodo(id);
    }
  return (
<div>
 
  <div className='max-w-2xl mx-auto border my-10'>
    <h1 className='font-bold text-lg w-full mx-auto text-center'>Todos</h1>
    <div className="px-4 py-2 ">
      <ul>
      {todos.map((todo) => (
           <li
                key={todo.id}
                className="text-slate-500 flex justify-between font-bold px-2 py-2 border hover:cursor-pointer
                ">
                {todo.title}
                <div>
                <button className="px-4 py-2 border rounded-md bg-red-400"
                onClick={() => deleteElement(todo.id)}>Delete</button>
                </div>
              </li>
))}
       </ul>
    </div>

  </div>
</div>
  )
}

export default Todo