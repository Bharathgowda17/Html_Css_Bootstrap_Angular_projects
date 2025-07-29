import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../auth/login/login.component';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7151/api/Auth'; 

  constructor(private http: HttpClient, private router: Router) {}

  register(model: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, model);
  }

  login(model: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, model);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserRole(): string | null {
    return localStorage.getItem('role');
  }
}

