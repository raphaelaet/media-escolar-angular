import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaMediaComponent } from './calcula-media.component';

describe('CalculaMediaComponent', () => {
  let component: CalculaMediaComponent;
  let fixture: ComponentFixture<CalculaMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculaMediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculaMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
