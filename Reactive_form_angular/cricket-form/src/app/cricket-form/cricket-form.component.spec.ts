import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketFormComponent } from './cricket-form.component';

describe('CricketFormComponent', () => {
  let component: CricketFormComponent;
  let fixture: ComponentFixture<CricketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CricketFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CricketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
