import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittlesidebarComponent } from './littlesidebar.component';

describe('LittlesidebarComponent', () => {
  let component: LittlesidebarComponent;
  let fixture: ComponentFixture<LittlesidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LittlesidebarComponent]
    });
    fixture = TestBed.createComponent(LittlesidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
