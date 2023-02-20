import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './Models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos: Todo[] = [];
  public allTask: boolean = true;
  public active: boolean = false;
  public completed: boolean = false;

  inputTodo: string="";

  displayAll(){
    this.allTask = true;
    this.active = false;
    this.completed = false;
  }

  displayActive(){
    this.allTask = false;
    this.active = true;
    this.completed = false;
  }

  displayCompleted(){
    this.allTask = false;
    this.active = false;
    this.completed = true;
  }

  public addTodo(){
    this.todos.push({
      id: this.todos.length+1,
      content: this.inputTodo, 
      isActive: true,
      isCompleted: false
    })

    this.inputTodo="";
  }

  public deleteAllTodo(id: number){
    this.todos = this.todos.filter((v, i)=> i!==id
    )
  
  }

  public completedTask(id: number){
    this.todos.map((v,i)=>{
      if(i==id){
        v.isCompleted = true,
        v.isActive = false
      }
    })
  }

  public activeTask(id: number){
    this.todos.map((v,i)=>{
      if(i==id){
        v.isCompleted = false,
        v.isActive = true
      }
    })
  }

  ngOnInit(): void{

  }
}
