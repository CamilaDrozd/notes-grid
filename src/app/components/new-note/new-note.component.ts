import { Component } from '@angular/core';
import { Nota } from '../../models/nota.models';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-new-note',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './new-note.component.html',
  styleUrl: './new-note.component.scss'
})
export class NewNoteComponent {

}
