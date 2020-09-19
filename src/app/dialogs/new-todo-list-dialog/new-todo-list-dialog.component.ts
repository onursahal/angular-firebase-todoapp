import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/user';
import { UserService } from 'src/app/user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-todo-list-dialog',
  templateUrl: './new-todo-list-dialog.component.html',
  styleUrls: ['./new-todo-list-dialog.component.css'],
})
export class NewTodoListDialogComponent implements OnInit {
  newTodoList: TodoList = {
    name: '',
    todos: [],
  };

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<NewTodoListDialogComponent>
  ) {}

  addNewTodoList() {
    this.userService.addNewList(this.newTodoList);
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}
