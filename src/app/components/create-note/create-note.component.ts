import { Component } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {
  constructor( private service: NoteService, private router: Router ){}

  criarNota(){
    this.service.criar(this.note).subscribe()
  }

  note: Note= {
    title: '',
    content: '',
    type: 'type1'
  }


}

