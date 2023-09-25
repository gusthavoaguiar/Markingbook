import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor( private http: HttpClient ) { }
  private readonly API = 'http://localhost:3000/notes'
  list() {
    return this.http.get<Note[]>(this.API)
  }
}

