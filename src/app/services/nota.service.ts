import { Injectable } from '@angular/core';
import { Nota } from '../models/nota.models';

@Injectable({
  providedIn: 'root',
})
export class NotaService {
  constructor() {}

  private readonly STORAGE_KEY = 'notes_app';

  saveNote(titulo: string, conteudo: string): void {
    const novaNota: Nota = {
      id: crypto.getRandomValues(new Uint32Array(1))[0],
      title: titulo,
      conteudo: conteudo,
      dataCriacao: new Date()
    }

    const notesList = this.getAllNotes();
    notesList.push(novaNota);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(notesList));
    console.log("Deu certo o salvamento" , novaNota);
  }

  getAllNotes(): Nota[] {
    const notes = localStorage.getItem(this.STORAGE_KEY);

    return notes ? JSON.parse(notes) : [];
    
  }
}
