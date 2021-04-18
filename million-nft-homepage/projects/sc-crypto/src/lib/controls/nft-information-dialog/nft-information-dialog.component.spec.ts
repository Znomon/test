import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NftInformationDialogComponent } from './nft-information-dialog.component';

describe('NftInformationDialogComponent', () => {
  let component: NftInformationDialogComponent;
  let fixture: ComponentFixture<NftInformationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NftInformationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NftInformationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
