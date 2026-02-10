import { Component, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NoteListComponent } from './components/note-list/note-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewNoteComponent,
    DialogModule,
    CommonModule,
    ButtonModule,
    NoteListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'notes-grid';
  exibirNota: boolean = false;

  cores = [
    {nome: 'teal', classe: 'color-teal', variavel: 'var(--optinal-color-teal)' },
    {nome: 'rosa', classe: 'color-rosa', variavel: 'var(--optinal-color-rosa)' },
    {nome: 'purple', classe: 'color-purple', variavel: 'var(--optinal-color-purple)' },
    {nome: 'blue', classe: 'color-blue', variavel: 'var(--optinal-color-blue)' },
    {nome: 'green', classe: 'color-green', variavel: 'var(--optinal-color-green)' },
    {nome: 'orange', classe: 'color-orange', variavel: 'var(--optinal-color-orange)' }
  ];
}
