import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UINavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: UINavbarComponent;
  let fixture: ComponentFixture<UINavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UINavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UINavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
