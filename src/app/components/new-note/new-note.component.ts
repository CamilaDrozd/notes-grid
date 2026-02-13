import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() notaEditar: Nota | null = null;

  ngOnInit(): void {
    console.log(this.notaService.getAllNotes());
    
    if(this.notaEditar){
      this.editarNota();
    }
  }

  

  salvarNota() {
    console.log("Vai salvar essa nota -> " + this.form);
    const novaNota: Nota = {
      title: this.form.value.titulo,
      conteudo: this.form.value.conteudo
    }
    this.notaService.saveNote(novaNota);
    this.sair();
    this.resetForm();
  }

  sair(){
    this.fechar.emit();
  }
  
  resetForm(){
    this.form.reset();
  }

  editarNota(){
    console.log("Entrou no editarNota");
    if(this.notaEditar){

      this.form.patchValue({
        titulo: this.notaEditar.title,
        conteudo: this.notaEditar.conteudo
      })
      
        console.log('/n Entrou no IF do editarNota' + this.form);
    }
  }
}
