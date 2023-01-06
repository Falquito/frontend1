import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgnavbarComponent } from './imgnavbar.component';

describe('ImgnavbarComponent', () => {
  let component: ImgnavbarComponent;
  let fixture: ComponentFixture<ImgnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
