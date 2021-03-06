import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Todo, User, TodoList } from 'src/app/user';

import { MatDialog } from '@angular/material/dialog';
import { ModifyTodoDialogComponent } from 'src/app/dialogs/modify-todo-dialog/modify-todo-dialog.component';
import { NewTodoDialogComponent } from '../../dialogs/new-todo-dialog/new-todo-dialog.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  listIndex;
  todos;
  user: User;

  constructor(private userService: UserService, private dialog: MatDialog) {
    this.userService.listIndexSbj.subscribe((index) => {
      this.listIndex = index;

      this.userService.user.subscribe((data) => {
        this.user = data;
        this.todos = this.user.todoList[this.listIndex].todos;
      });
    });
  }
  openModifyDialog(todo: any): void {
    this.todoIndex(todo);
    const dialogRef = this.dialog.open(ModifyTodoDialogComponent, {
      width: '250px',
    });
  }
  openNewTodoDialog() {
    this.dialog.open(NewTodoDialogComponent, {
      width: '250px',
    });
  }

  isFinished(todo: any) {
    this.todoIndex(todo);
    this.userService.updateIsFinished();
  }

  todoIndex(todo: any): void {
    this.userService.todoIndexSbj.next(
      this.user.todoList[this.listIndex].todos.indexOf(todo)
    );
  }
  ngOnInit(): void {}
}
