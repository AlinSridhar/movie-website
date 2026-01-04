import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentyRunning } from './currenty-running';

describe('CurrentyRunning', () => {
  let component: CurrentyRunning;
  let fixture: ComponentFixture<CurrentyRunning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentyRunning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentyRunning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
