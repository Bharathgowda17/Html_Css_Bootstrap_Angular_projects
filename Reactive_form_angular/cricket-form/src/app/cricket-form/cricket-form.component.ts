// src/app/cricket-form/cricket-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordMatch } from './custom-validators';

@Component({
  selector: 'app-cricket-form',
  templateUrl: './cricket-form.component.html',
  styleUrls: ['./cricket-form.component.css']
})
export class CricketFormComponent implements OnInit {
  playerForm!: FormGroup;
  submitted = false;

  battingStyles: string[] = ['Right-Handed', 'Left-Handed', 'Both-Handed'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.playerForm = this.fb.group({
      playerName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(10), Validators.max(50)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      teamName: ['', Validators.required],
      battingStyle: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue] 
    }, {
      validators: PasswordMatch  
    });
  }


  get f() {
    return this.playerForm.controls;
  }


  onSubmit() {
    this.submitted = true;

    if (this.playerForm.invalid) {
      alert('Form is invalid! Please fill all required fields correctly.');
      return; 
    }

    console.log(this.playerForm.value);
    alert('Cricket Player Registered Successfully!');

    this.playerForm.reset();
    this.submitted = false;
  }
}
