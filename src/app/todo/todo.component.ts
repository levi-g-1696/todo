import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
tasks:string[]=[];
  constructor() { 
    this.tasks= ["task1",
     "task2"]
  }

  ngOnInit(): void {
  }
  handleSubmit(addForm:NgForm) :void {
    this.tasks.push(addForm.value.task);
    addForm.resetForm();
  }

}
