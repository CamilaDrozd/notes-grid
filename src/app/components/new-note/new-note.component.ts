import { Component } from '@angular/core';
import { Nota } from '../../models/nota.models';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-note',
  standalone: true,
  imports: [ButtonModule, FormsModule],
  templateUrl: './new-note.component.html',
  styleUrl: './new-note.component.scss'
})
export class NewNoteComponent {

  novaNota = {
    titulo: '',
    conteudo: ''
  }

  salvarNota(){
    console.log('Titulo capturado:', this.novaNota.titulo);
    console.log('Texto capturado:', this.novaNota.conteudo);

  }
}
