import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenwearComponent } from './menwear.component';

describe('MenwearComponent', () => {
  let component: MenwearComponent;
  let fixture: ComponentFixture<MenwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenwearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
