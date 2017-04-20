import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonziComponent } from './konzi.component';

describe('KonziComponent', () => {
  let component: KonziComponent;
  let fixture: ComponentFixture<KonziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
