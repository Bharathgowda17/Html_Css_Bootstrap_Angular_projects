import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  model = {
    username: '',
    password: ''
  };

  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (!this.model.username || !this.model.password) {
      this.errorMessage = 'All fields are required!';
      return;
    }

    this.auth.login(this.model).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);

        if (res.role === 'Admin') {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.router.navigate(['/user/dashboard']);
        }
      },
      error: (err) => {
        this.errorMessage = 'Invalid credentials';
      }
    });
  }
}
