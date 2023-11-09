import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudComponent } from './view-stud.component';

describe('ViewStudComponent', () => {
  let component: ViewStudComponent;
  let fixture: ComponentFixture<ViewStudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewStudComponent]
    });
    fixture = TestBed.createComponent(ViewStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
