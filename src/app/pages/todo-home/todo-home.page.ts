import {Component, OnInit} from '@angular/core';
import {Todo, TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-home',
  templateUrl: 'todo-home.page.html',
  styleUrls: ['todo-home.page.scss'],
})
export class TodoHomePage implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  remove(item) {
    this.todoService.removeTodo(item.id);
  }

}
