import { Injectable } from '@angular/core';
import { Nota } from '../models/nota.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotaService {
  constructor() {}

  private readonly STORAGE_KEY = 'notes_app';

  private notasSubject = new BehaviorSubject<Nota[]>(this.getAllNotes());

  notas$ = this.notasSubject.asObservable();

  saveNote(nota: Nota): void {
    let novaNota: Nota = {
      ...nota,
    };

    console.log(nota.id);
    if (novaNota.id) {

      this.updateNote(novaNota);
      console.log('AQUI só deve entrar se for UMA NOTA EDITADA');

    } else {

      console.log('Aqui só deve entrar se for uma NOVA NOTA');
      novaNota.id = crypto.getRandomValues(new Uint32Array(1))[0];
      novaNota.dataCriacao = new Date();

      const notesList = this.getAllNotes();
      notesList.push(novaNota);
  
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(notesList));
      this.notasSubject.next(notesList);
    }
  }

  getAllNotes(): Nota[] {
    const notes = localStorage.getItem(this.STORAGE_KEY);

    return notes ? JSON.parse(notes) : [];
  }

  updateNote(notaAtualizar: Nota) {
    notaAtualizar.dataAtualizacao = new Date();

    const notesList = this.getAllNotes();

    const index: number = notesList.findIndex(
      (note) => note.id == notaAtualizar.id,
    );

    if (index !== -1) {
      notesList[index] = notaAtualizar;

        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(notesList));
        this.notasSubject.next(notesList);
    }
  }
}
