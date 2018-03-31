import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfEanComponent } from './list-of-ean.component';

describe('ListOfEanComponent', () => {
  let component: ListOfEanComponent;
  let fixture: ComponentFixture<ListOfEanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfEanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfEanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
