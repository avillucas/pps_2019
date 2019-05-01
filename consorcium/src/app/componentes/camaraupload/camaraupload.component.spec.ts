import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamarauploadComponent } from './camaraupload.component';

describe('CamarauploadComponent', () => {
  let component: CamarauploadComponent;
  let fixture: ComponentFixture<CamarauploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamarauploadComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamarauploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
