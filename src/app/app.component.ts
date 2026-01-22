import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewNoteComponent } from './components/new-note/new-note.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewNoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'notes-grid';
}
