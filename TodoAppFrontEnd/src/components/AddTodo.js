import React, { useState } from 'react'
import AppService from '../service/AppService';
import { useNavigate } from 'react-router-dom';

function AddTodo() {
    const navigate = useNavigate();
    const [todos, setTodos] = useState({
        id: "",
        title:"",
        content:""
        });

        const handleChange = (e) => {
            const value = e.target.value;
            setTodos({ ...todos,[e.target.name]: value,});
        };
        const saveTodo = (e) => {
            e.preventDefault();
            AppService.saveTodo(todos).then((res) => {
                console.log(res);
                navigate("/index");
            });
        }

  return (

    <div>
        <form>
        <label for="title"> Title</label>
        <input type='text' name='title'   onChange={(e) => handleChange(e)}/>
        <label for="title"> Content</label>
        <input type='text' name='title'  onChange={(e) => handleChange(e)}/>
        <button type='submit' onClick={saveTodo}>Save</button>


        </form>
    </div>
  )
}

export default AddTodo