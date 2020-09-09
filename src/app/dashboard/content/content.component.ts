import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  todos;
  constructor(private userService: UserService) {
    this.userService.user.subscribe((data) => {
      this.todos = data.todos[0].items;
      console.log(this.todos);
    });
  }

  ngOnInit(): void {}
}
