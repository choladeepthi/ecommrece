import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenwearComponent } from './womenwear.component';

describe('WomenwearComponent', () => {
  let component: WomenwearComponent;
  let fixture: ComponentFixture<WomenwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenwearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
