import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAuthComponent } from './example-auth.component';

describe('ExampleAuthComponent', () => {
  let component: ExampleAuthComponent;
  let fixture: ComponentFixture<ExampleAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleAuthComponent]
    });
    fixture = TestBed.createComponent(ExampleAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
