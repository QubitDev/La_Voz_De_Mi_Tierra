import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAdmComponent } from './vista-adm.component';

describe('VistaAdmComponent', () => {
  let component: VistaAdmComponent;
  let fixture: ComponentFixture<VistaAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaAdmComponent]
    });
    fixture = TestBed.createComponent(VistaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
