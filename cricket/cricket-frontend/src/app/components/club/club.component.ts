import { Component, OnInit } from '@angular/core';
import { Club } from '../../models/club.model';
import { ClubService } from '../../services/club.service';



@Component({
  selector: 'app-club',
  templateUrl: './club.component.html'
})
export class ClubComponent implements OnInit {
  clubs: Club[] = [];
  newClubName = '';

  constructor(private clubservice : ClubService) {}

  ngOnInit(): void {
    this.loadClubs();
  }

  loadClubs(): void {
    this.clubservice.getAll().subscribe(data => this.clubs = data);
  }

  addClub(): void {
    const club: Club = { id: 0, name: this.newClubName.trim() };
    this.clubservice.create(club).subscribe(() => {
      this.newClubName = '';
      this.loadClubs();
    });
  }

  deleteClub(id: number): void {
    this.clubservice.delete(id).subscribe(() => this.loadClubs());
  }
}

