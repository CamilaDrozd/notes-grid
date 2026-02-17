import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotaService } from '../../services/nota.service';
import { AsyncPipe } from '@angular/common';
import { Nota } from '../../models/nota.models';
import { Button } from "primeng/button";

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [AsyncPipe, Button],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent implements OnInit {
  listaDeNotas: any[] = [];

  @Output() cardSelecionada = new EventEmitter<Nota>();

  constructor (private notaService: NotaService) {}

  notas$ = this.notaService.notas$;

  ngOnInit(): void {
    this.listaDeNotas = this.notaService.getAllNotes();
  }

  selecionarNota(nota : Nota){
    this.cardSelecionada.emit(nota);
    console.log("Entrou no SelecionarNota do note-list" + nota)
  }
}
