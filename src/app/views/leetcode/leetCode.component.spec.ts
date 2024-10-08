import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeetCodeComponent } from './leetCode.component';

describe('LeetcodeComponent', () => {
  let component: LeetCodeComponent;
  let fixture: ComponentFixture<LeetCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeetCodeComponent]
    });
    fixture = TestBed.createComponent(LeetCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
