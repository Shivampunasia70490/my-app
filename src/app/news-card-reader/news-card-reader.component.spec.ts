import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardReaderComponent } from './news-card-reader.component';

describe('NewsCardReaderComponent', () => {
  let component: NewsCardReaderComponent;
  let fixture: ComponentFixture<NewsCardReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsCardReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsCardReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
