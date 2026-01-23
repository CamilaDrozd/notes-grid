import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NewNoteComponent } from './components/new-note/new-note.component';

export const routes: Routes = [
  {
    path: 'new-note',
    component: NewNoteComponent
  }
];
