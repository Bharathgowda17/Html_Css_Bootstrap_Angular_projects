import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  model = {
    username: '',
    password: '',
    role: 'User'
  };

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.model).subscribe(() => {
      alert('Registered Successfully!');
      this.router.navigate(['/login']);
    });
  }
}
