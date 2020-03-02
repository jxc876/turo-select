import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuroSelectComponent } from './turo-select.component';

describe('TuroSelectComponent', () => {
  let component: TuroSelectComponent;
  let fixture: ComponentFixture<TuroSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuroSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuroSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
