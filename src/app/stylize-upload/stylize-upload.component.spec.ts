import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylizeUploadComponent } from './stylize-upload.component';

describe('StylizeUploadComponent', () => {
  let component: StylizeUploadComponent;
  let fixture: ComponentFixture<StylizeUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylizeUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylizeUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
