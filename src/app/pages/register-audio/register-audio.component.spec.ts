import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAudioComponent } from './register-audio.component';

describe('RegisterAudioComponent', () => {
  let component: RegisterAudioComponent;
  let fixture: ComponentFixture<RegisterAudioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAudioComponent]
    });
    fixture = TestBed.createComponent(RegisterAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
