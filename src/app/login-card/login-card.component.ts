import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css'],
})
export class LoginCardComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private authService: AuthService,
    private router: Router
  ) {
    this.matIconRegistry.addSvgIcon(
      'facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/facebooklogo.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'google',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/googlelogo.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/githublogo.svg'
      )
    );
  }
  login() {
    this.authService.login(this.email, this.password);
  }
  singUp() {
    this.router.navigate(['signup']);
  }

  ngOnInit(): void {}
}
