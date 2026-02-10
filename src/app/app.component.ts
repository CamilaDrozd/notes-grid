import { Component, EventEmitter, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NoteListComponent } from './components/note-list/note-list.component';
import { TemaCor } from './models/tema-cor.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewNoteComponent,
    DialogModule,
    CommonModule,
    ButtonModule,
    NoteListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{


  ngOnInit(): void {
    this.aplicarTemaSalvo();
  }

  private aplicarTemaSalvo():void{
    const corSalva = localStorage.getItem('corEscolhida');

    if(corSalva){
      document.documentElement.style.setProperty('--primary-theme-color', corSalva);
    }
  }

  title = 'notes-grid';
  exibirNota: boolean = false;

  readonly cores: TemaCor[] = [
    { nome: 'teal', classe: 'color-teal', variavel: 'var(--optional-color-teal)' },
    { nome: 'rosa', classe: 'color-rosa', variavel: 'var(--optional-color-rosa)' },
    { nome: 'purple', classe: 'color-purple',  variavel: 'var(--optional-color-purple)' },
    { nome: 'blue', classe: 'color-blue', variavel: 'var(--optional-color-blue)' },
    { nome: 'green', classe: 'color-green', variavel: 'var(--optional-color-green)' },
    { nome: 'orange', classe: 'color-orange', variavel: 'var(--optional-color-orange)' },
  ];

  selecionarCorTema(cor: TemaCor): void {
    document.documentElement.style.setProperty(
      '--primary-theme-color',
      cor.variavel,
    );
    localStorage.setItem('corEscolhida', cor.variavel);
  }
}
