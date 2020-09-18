import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modify-todo-dialog',
  templateUrl: './modify-todo-dialog.component.html',
  styleUrls: ['./modify-todo-dialog.component.css'],
})
export class ModifyTodoDialogComponent implements OnInit {
  newTodo: string;

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<ModifyTodoDialogComponent>
  ) {}

  updateTodo() {
    this.userService.updateTodo(this.newTodo);
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
