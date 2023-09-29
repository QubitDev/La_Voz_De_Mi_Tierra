import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAudioComponent } from './type-audio.component';

describe('TypeAudioComponent', () => {
  let component: TypeAudioComponent;
  let fixture: ComponentFixture<TypeAudioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeAudioComponent]
    });
    fixture = TestBed.createComponent(TypeAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
