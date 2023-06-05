package com.example.todoappreact;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {
    // now we need to implement a crud api

    private final TodoService service;
    @GetMapping("/todo")
    public ResponseEntity<List<Todo>> getAllTodos(){
        List<Todo> allTodo = service.getAllTodo();
        return ResponseEntity.ok(allTodo);
    }
    @PostMapping("/todo")
    public ResponseEntity<Todo> addTodo(@RequestBody Todo todo){
        return ResponseEntity.ok(service.addTodo(todo));
    }
    @PutMapping("/todo/{id}")
    public ResponseEntity<Todo> editTodo(@PathVariable Long id, @RequestBody Todo todo){
        return ResponseEntity.ok(service.updateTodoById(id,todo));
    }
    @DeleteMapping("/todo/{id}")
    public ResponseEntity<Map<String,Boolean>> removeTodo(@PathVariable Long id){
        boolean deleted = service.deteleTodo(id);
        Map<String, Boolean> result = new HashMap<>();
        result.put("Deleted",deleted);
        return ResponseEntity.ok(result);
    }
}
