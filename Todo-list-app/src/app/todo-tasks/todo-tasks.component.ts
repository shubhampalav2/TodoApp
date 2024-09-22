import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo-tasks',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todo-tasks.component.html',
  styleUrl: './todo-tasks.component.css'
})
export class TodoTasksComponent {
todos=[{
_id:1,
title:"Title 1",
description:"desc 1"
},
{
_id:2,
title:"Title 2",
description:"desc 2"
},
{
_id:3,
title:"Title 3",
description:"desc 3"
},
{
_id:4,
title:"Title 4",
description:"desc 4"
}]
//Deleting todo item on click event
clickHandler(todo:any){
this.todos=this.todos.filter((element)=>{return todo._id!==element._id})
console.log("Button is clicked");
}
}
