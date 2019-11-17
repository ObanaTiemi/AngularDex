import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalDexComponent } from './national-dex.component';

describe('NationalDexComponent', () => {
  let component: NationalDexComponent;
  let fixture: ComponentFixture<NationalDexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalDexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalDexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
