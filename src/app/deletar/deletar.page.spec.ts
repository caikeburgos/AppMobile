import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarPage } from './deletar.page';

describe('DeletarPage', () => {
  let component: DeletarPage;
  let fixture: ComponentFixture<DeletarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
