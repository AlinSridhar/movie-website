import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homemain } from './homemain';

describe('Homemain', () => {
  let component: Homemain;
  let fixture: ComponentFixture<Homemain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homemain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homemain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
