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
    if(this.notaEditar){
      this.editarNota();
      console.log(this.notaEditar.id);
    }
  }

  

  salvarNota() {
    let dadosForm = this.form.getRawValue();
    
    let novaNota: Nota = {
      ...this.notaEditar,
      title: dadosForm.titulo,
      conteudo: dadosForm.conteudo
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
    if(this.notaEditar){
      this.form.patchValue({
        titulo: this.notaEditar.title,
        conteudo: this.notaEditar.conteudo
      })
      
    }
  }
}
