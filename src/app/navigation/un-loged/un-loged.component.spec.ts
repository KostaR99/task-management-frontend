import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnLogedComponent } from './un-loged.component';

describe('UnLogedComponent', () => {
  let component: UnLogedComponent;
  let fixture: ComponentFixture<UnLogedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnLogedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnLogedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
