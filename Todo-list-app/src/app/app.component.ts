import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoTasksComponent } from "./todo-tasks/todo-tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo-list-app';
}
