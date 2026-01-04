import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navs } from './navs';

describe('Navs', () => {
  let component: Navs;
  let fixture: ComponentFixture<Navs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
