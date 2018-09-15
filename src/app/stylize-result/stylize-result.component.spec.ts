import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylizeResultComponent } from './stylize-result.component';

describe('StylizeResultComponent', () => {
  let component: StylizeResultComponent;
  let fixture: ComponentFixture<StylizeResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylizeResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylizeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
