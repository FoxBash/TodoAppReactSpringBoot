import axios from 'axios';


const BASE_URL = 'http://localhost:8080/api/v1';

class AppService {
    static saveTodo(todo) {
        return axios.post(BASE_URL + '/todo', todo);
    }
    static getTodos() {
        return axios.get(BASE_URL + '/todo');
    }
    static editTodo(id, todo){
        return axios.put(BASE_URL +`/todo/${id}`, todo);
    }
    static removeTodo(id){
        return axios.delete(BASE_URL + `/todo/${id}`);
    }


}

export default AppService