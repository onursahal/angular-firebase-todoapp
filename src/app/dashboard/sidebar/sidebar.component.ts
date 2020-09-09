import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  todos;
  user;

  constructor(private userService: UserService) {
    this.userService.user.subscribe((data) => {
      this.todos = data.todos;
      this.user = data;
      console.log(this.todos);
    });
  }

  ngOnInit(): void {}
}
