import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechIdeasComponent } from './tech-ideas.component';

describe('TechIdeasComponent', () => {
  let component: TechIdeasComponent;
  let fixture: ComponentFixture<TechIdeasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechIdeasComponent]
    });
    fixture = TestBed.createComponent(TechIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
