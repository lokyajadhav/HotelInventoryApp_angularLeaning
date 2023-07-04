import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkeckComponent } from './ckeck.component';

describe('CkeckComponent', () => {
  let component: CkeckComponent;
  let fixture: ComponentFixture<CkeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CkeckComponent]
    });
    fixture = TestBed.createComponent(CkeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
