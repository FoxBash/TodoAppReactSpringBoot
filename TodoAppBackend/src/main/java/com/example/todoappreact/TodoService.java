package com.example.todoappreact;

import java.util.List;

public interface TodoService {
    List<Todo> getAllTodo();

    Todo addTodo(Todo todo);

    Todo updateTodoById(Long id, Todo todo);

    boolean deteleTodo(Long id);
}
