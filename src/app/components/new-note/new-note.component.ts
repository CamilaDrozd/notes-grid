import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Nota } from '../../models/nota.models';
import { ButtonModule } from 'primeng/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { NotaService } from '../../services/nota.service';

@Component({
  selector: 'app-new-note',
  standalone: true,
  imports: [ButtonModule, ReactiveFormsModule],
  templateUrl: './new-note.component.html',
  styleUrl: './new-note.component.scss',
})
export class NewNoteComponent implements OnInit {
  form = new FormGroup({
    titulo: new FormControl('', {
      validators: [Validators.minLength(2)],
      nonNullable: true,
    }),
    conteudo: new FormControl('', { nonNullable: true }),
  });

  constructor(private notaService: NotaService) {}

  @Output() fechar = new EventEmitter<void>();

  ngOnInit(): void {
    console.log(this.notaService.getAllNotes());
  }

  salvarNota() {
    console.log(this.form);
    const titulo = this.form.controls.titulo.value;
    const conteudo = this.form.controls.conteudo.value;
    this.notaService.saveNote(titulo, conteudo);
  }

  cancelar(){
    this.fechar.emit();
  }
  
}
