import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../services/nota.service';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent implements OnInit {
  listaDeNotas: any[] = [];

  constructor (private notaService: NotaService) {}


  ngOnInit(): void {
    this.listaDeNotas = this.notaService.getAllNotes();
  }
}
