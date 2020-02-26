import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwCommonComponent } from './fw-common.component';

describe('FwCommonComponent', () => {
  let component: FwCommonComponent;
  let fixture: ComponentFixture<FwCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
