import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../apiservices.service';
import { person } from '../models/person';

@Component({
  selector: 'app-usercomp',
  templateUrl: './usercomp.component.html',
  styleUrls: ['./usercomp.component.css']
})
export class UsersComponent implements OnInit {

  person: person[] = [];

  newUsers: person = {
    userId: '0',
    title: '',
    body: ''
  };

  editMode: boolean = false;

  constructor(private apiService: ApiServicesService) {}

  ngOnInit() {
    this.getPerson();
  }

  getPerson() {
    this.apiService.getPerson().subscribe({
      next: (res) => {
        this.person = res;
        console.log(this.person);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  addPerson() {
    if (this.editMode) {
      this.updatePerson();
    } else {
      this.apiService.addPerson(this.newUsers).subscribe({
        next: (res) => {
          console.log("Person added");
          this.newUsers = { userId: '0', title: '', body: '' };
          this.getPerson();
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  editPerson(user: person) {
    this.newUsers = { ...user };
    this.editMode = true;
  }

  updatePerson() {
    this.apiService.updateUser(+this.newUsers.userId, this.newUsers).subscribe({
     next: (res: any) => {
        console.log("User updated:", res);
        this.newUsers = { userId: '0', title: '', body: '' };
        this.editMode = false;
        this.getPerson();
      },
      error: (err: any) => {
        console.error("Update error:", err);
      }
    });
  }

  deletePerson(userId: number) {
    this.apiService.deleteUser(userId).subscribe({
      next: (res) => {
        console.log("User deleted:", res);
        this.getPerson();
      },
      error: (err) => {
        console.error("Delete error:", err);
      }
    });
  }
}
