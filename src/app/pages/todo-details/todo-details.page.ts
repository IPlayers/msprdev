import { Component, OnInit } from '@angular/core';
import {Todo, TodoService} from '../../services/todo.service';
import {ActivatedRoute} from '@angular/router';
import {LoadingController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {

  todo: Todo = {
    nom: null,
    prenom: null,
    ventes: null,
    formations: null,
    createdAt : new Date().getTime()
  };

  todoId = null;

  constructor(private todoService: TodoService, private route: ActivatedRoute,
              private loadingController: LoadingController,
              private nav: NavController) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId) {
      this.loadTodo();
    }
  }

  async loadTodo() {

    const loading = await this.loadingController.create({
      // @ts-ignore
      content: 'Loading...'
    });
    await loading.present();

    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      // @ts-ignore
      content: 'Saving...'
    });
    await loading.present();

    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('todo-home');
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.nav.navigateBack('todo-home');
      });
    }
  }

}
