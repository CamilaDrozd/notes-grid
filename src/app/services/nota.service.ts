import { Injectable } from '@angular/core';
import { Nota } from '../models/nota.models';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  constructor() { }

  private readonly STORAGE_KEY = 'notes_app';

  saveNote(novaNota: Nota) :void {
    let salvarNota: string = JSON.stringify(novaNota)
  }

  getAllNotes() :any{
    let local_Storage_Notes = localStorage.getItem('notes_app');
    if(local_Storage_Notes == null){
      return null;
    }else{
      let allNotes = JSON.parse(local_Storage_Notes);
    }
  }
}
