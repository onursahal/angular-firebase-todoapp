import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modify-list-name-dialog',
  templateUrl: './modify-list-name-dialog.component.html',
  styleUrls: ['./modify-list-name-dialog.component.css'],
})
export class ModifyListNameDialogComponent implements OnInit {
  newListName: string;

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<ModifyListNameDialogComponent>
  ) {}

  updateName() {
    this.userService.updateListName(this.newListName);
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
