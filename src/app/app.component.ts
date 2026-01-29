import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewNoteComponent,
    DialogModule,
    CommonModule,
    ButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'notes-grid';
  exibirNota: boolean = false;
}
