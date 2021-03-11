import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModrnUiComponent } from './modrn-ui.component';

describe('ModrnUiComponent', () => {
  let component: ModrnUiComponent;
  let fixture: ComponentFixture<ModrnUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModrnUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModrnUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
