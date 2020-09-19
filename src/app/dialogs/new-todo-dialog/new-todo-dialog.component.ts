import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/user';
import { UserService } from 'src/app/user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-todo-dialog',
  templateUrl: './new-todo-dialog.component.html',
  styleUrls: ['./new-todo-dialog.component.css'],
})
export class NewTodoDialogComponent implements OnInit {
  newTodo: Todo = {
    todo: '',
    isFinished: false,
  };

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<NewTodoDialogComponent>
  ) {}

  addNewTodo() {
    this.userService.addNewTodo(this.newTodo);
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}
