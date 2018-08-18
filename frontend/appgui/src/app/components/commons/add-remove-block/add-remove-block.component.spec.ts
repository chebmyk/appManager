import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveBlockComponent } from './add-remove-block.component';

describe('AddRemoveBlockComponent', () => {
  let component: AddRemoveBlockComponent;
  let fixture: ComponentFixture<AddRemoveBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
