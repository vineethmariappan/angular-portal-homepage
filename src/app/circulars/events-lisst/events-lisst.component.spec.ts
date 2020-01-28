import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsLisstComponent } from './events-lisst.component';

describe('EventsLisstComponent', () => {
  let component: EventsLisstComponent;
  let fixture: ComponentFixture<EventsLisstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsLisstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsLisstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
