import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScCryptoComponent } from './sc-crypto.component';

describe('ScCryptoComponent', () => {
  let component: ScCryptoComponent;
  let fixture: ComponentFixture<ScCryptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScCryptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
