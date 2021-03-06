import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  email: string;
  password: string;
  fullName: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  signup() {
    this.authService.signup(this.email, this.password, this.fullName);
  }
}
