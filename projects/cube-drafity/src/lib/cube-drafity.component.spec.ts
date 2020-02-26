import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeDrafityComponent } from './cube-drafity.component';

describe('CubeDrafityComponent', () => {
  let component: CubeDrafityComponent;
  let fixture: ComponentFixture<CubeDrafityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeDrafityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeDrafityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
