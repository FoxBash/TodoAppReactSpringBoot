package com.example.todoappreact;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService{
    private final TodoRepo repo;
    @Override
    public List<Todo> getAllTodo() {
        return repo.findAll();
    }

    @Override
    public Todo addTodo(Todo todo) {
        repo.save(todo);
        return todo;
    }

    @Override
    public Todo updateTodoById(Long id, Todo todo) {
        Todo todo1 = repo.findById(id).get();
        todo1.setTitle(todo.getTitle());
        todo1.setContent(todo.getContent());
        repo.save(todo1);
        return null;
    }

    @Override
    public boolean deteleTodo(Long id) {
        Optional<Todo> optionalTodo = repo.findById(id);
        if (optionalTodo.isPresent()){
            Todo todo = optionalTodo.get();
            repo.delete(todo);
            return true;
        }
        return false;
    }
}
