import { Injectable } from '@angular/core';
import { Nota } from '../models/nota.models';

@Injectable({
  providedIn: 'root',
})
export class NotaService {
  constructor() {}

  private readonly STORAGE_KEY = 'notes_app';

  saveNote(novaNota: Nota): void {
    novaNota.id = crypto.getRandomValues(new Uint32Array(1))[0];
    novaNota.dataCriacao = new Date;

    const notesList = this.getAllNotes();
    notesList.push(novaNota);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(notesList));
  }

  getAllNotes(): Nota[] {
    const notes = localStorage.getItem(this.STORAGE_KEY);

    return notes ? JSON.parse(notes) : [];
    
  }
}
