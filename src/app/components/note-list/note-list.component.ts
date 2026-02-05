import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../services/nota.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent implements OnInit {
  listaDeNotas: any[] = [];

  constructor (private notaService: NotaService) {}

  notas$ = this.notaService.notas$;

  ngOnInit(): void {
    this.listaDeNotas = this.notaService.getAllNotes();
  }
}
