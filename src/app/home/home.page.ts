import {Component, OnInit} from '@angular/core';
import {Todo, TodoService} from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  todos: Todo[];
  IsDark: boolean;

  constructor(private todoService: TodoService) {
    this.IsDark = false;
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  remove(item) {
    this.todoService.removeTodo(item.id);
  }

  DarkModeToggle() {
    this.IsDark = !this.IsDark;
    if (this.IsDark) {
      document.documentElement.style.setProperty(`--background-color`, '#000000');
    } else {
      document.documentElement.style.setProperty(`--background-color`, '#FFFFFF');
    }
  }

}
