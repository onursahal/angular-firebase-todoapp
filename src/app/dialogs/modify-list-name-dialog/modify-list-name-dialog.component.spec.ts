import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyListNameDialogComponent } from './modify-list-name-dialog.component';

describe('ModifyListNameDialogComponent', () => {
  let component: ModifyListNameDialogComponent;
  let fixture: ComponentFixture<ModifyListNameDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyListNameDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyListNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
