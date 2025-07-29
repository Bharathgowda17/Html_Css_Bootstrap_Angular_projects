import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  skills = ['Angular', 'React', 'Java', 'Python'];
  users: User[] = [];
  paginatedUsers: User[] = [];
  currentPage = 1;
  pageSize = 5;

  isEditMode = false;
  editUserId: number | null = null;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z][A-Za-z ]*$'),
          Validators.minLength(2),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[6-9]\\d{9}$'),
        ],
      ],
      gender: ['male', Validators.required],
      skill: ['', Validators.required],
    });

    this.fetchUsers();
  }

  get f() {
    return this.userForm.controls;
  }

  fetchUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.paginateUsers();
    });
  }

  paginateUsers() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.paginatedUsers = this.users.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Array(Math.ceil(this.users.length / this.pageSize))
      .fill(0)
      .map((_, i) => i + 1);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.paginateUsers();
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const user: User = this.userForm.value;

    if (this.isEditMode && this.editUserId !== null) {
      this.userService.updateUser(this.editUserId, user).subscribe(() => {
        alert('Updated successfully');
        this.fetchUsers();
        this.resetForm();
      });
    } else {
      this.userService.addUser(user).subscribe(() => {
        alert('Submitted successfully');
        this.fetchUsers();
        this.resetForm();
      });
    }
  }

  onClear() {
    this.resetForm();
  }

  resetForm() {
    this.userForm.reset();
    this.isEditMode = false;
    this.editUserId = null;
  }

  onEdit(user: User) {
    this.isEditMode = true;
    this.editUserId = user.id; 

    this.userForm.patchValue({
      name: user.name,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      skill: user.skill,
    });
  }

  onDelete(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
       alert('Deleted successfully');
      this.fetchUsers();
    });
  }
}
