import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbtComponent } from './gbt.component';

describe('GbtComponent', () => {
  let component: GbtComponent;
  let fixture: ComponentFixture<GbtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GbtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
