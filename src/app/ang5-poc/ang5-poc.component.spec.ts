import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ang5PocComponent } from './ang5-poc.component';

describe('Ang5PocComponent', () => {
  let component: Ang5PocComponent;
  let fixture: ComponentFixture<Ang5PocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ang5PocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ang5PocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
