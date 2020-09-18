import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTodoDialogComponent } from './modify-todo-dialog.component';

describe('ModifyTodoDialogComponent', () => {
  let component: ModifyTodoDialogComponent;
  let fixture: ComponentFixture<ModifyTodoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyTodoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyTodoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
