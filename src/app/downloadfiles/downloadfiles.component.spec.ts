import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadfilesComponent } from './downloadfiles.component';

describe('DownloadfilesComponent', () => {
  let component: DownloadfilesComponent;
  let fixture: ComponentFixture<DownloadfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
