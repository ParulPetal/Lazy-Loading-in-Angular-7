import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazycomponent2Component } from './lazycomponent2.component';

describe('Lazycomponent2Component', () => {
  let component: Lazycomponent2Component;
  let fixture: ComponentFixture<Lazycomponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lazycomponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazycomponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
