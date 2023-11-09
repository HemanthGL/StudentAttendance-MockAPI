import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstudComponent } from './viewstud.component';

describe('ViewstudComponent', () => {
  let component: ViewstudComponent;
  let fixture: ComponentFixture<ViewstudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewstudComponent]
    });
    fixture = TestBed.createComponent(ViewstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
