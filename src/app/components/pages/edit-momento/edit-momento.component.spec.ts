import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMomentoComponent } from './edit-momento.component';

describe('EditMomentoComponent', () => {
  let component: EditMomentoComponent;
  let fixture: ComponentFixture<EditMomentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMomentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMomentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
