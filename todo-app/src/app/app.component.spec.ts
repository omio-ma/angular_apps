import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Todo } from './todo';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have a newTodo todo`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let app = fixture.debugElement.componentInstance;
    expect(app.newTodo instanceof Todo).toBeTruthy();
  });

  it('should display "Todos" in h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Todos');
  });

  it(`should have a newTodo todo`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let app = fixture.debugElement.componentInstance;
    expect(app.newTodo instanceof Todo).toBeTruthy();
  });

  it('should display "Todos" in h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Todos');
  });
});
