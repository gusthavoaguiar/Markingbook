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

  createNote(){
    this.service.create(this.note).subscribe(() =>{
      this.router.navigate(['/home'])
    })
  }

  cancelNote(){
    this.router.navigate(['/home'])
  }


  note: Note= {
    title: '',
    content: '',
    type: 'type1'
  }


}

