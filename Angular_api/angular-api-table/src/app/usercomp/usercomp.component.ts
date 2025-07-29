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
    this.apiService.addPerson(this.newUsers).subscribe({
      next: (res) => {
        console.log("Person added");
        this.getPerson(); 
      },
      error: (err) => {
        console.log(err);
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
