import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { TodoList, User, Todo } from '../../user';
import { MatDialog } from '@angular/material/dialog';
import { ModifyListNameDialogComponent } from 'src/app/dialogs/modify-list-name-dialog/modify-list-name-dialog.component';
import { NewTodoListDialogComponent } from '../../dialogs/new-todo-list-dialog/new-todo-list-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  todos: TodoList;
  user: User;

  constructor(private userService: UserService, public dialog: MatDialog) {
    this.userService.user.subscribe((data) => {
      this.todos = data.todoList;
      this.user = data;
    });
  }

  openModifyDialog(todo: any): void {
    this.listIndex(todo);
    const dialogRef = this.dialog.open(ModifyListNameDialogComponent, {
      width: '250px',
    });
  }
  openNewTodoListDialog() {
    const dialogRef = this.dialog.open(NewTodoListDialogComponent, {
      width: '250px',
    });
  }

  listIndex(todo: any) {
    this.userService.listIndexSbj.next(this.user.todoList.indexOf(todo));
  }

  ngOnInit(): void {}
}
