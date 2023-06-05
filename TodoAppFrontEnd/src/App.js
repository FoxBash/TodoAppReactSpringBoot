import Todo from "./components/Todo";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo";


function App() {
  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route index element={<Todo/>}/>
  <Route path="/index" element={<Todo/>}/>
  <Route path="/addTodo" element={<AddTodo/>}/>
</Routes>
</BrowserRouter>

  
   
</>
  );
  
  }
export default App;

