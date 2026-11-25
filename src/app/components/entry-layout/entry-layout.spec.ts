import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryLayout } from './entry-layout';

describe('EntryLayout', () => {
  let component: EntryLayout;
  let fixture: ComponentFixture<EntryLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
