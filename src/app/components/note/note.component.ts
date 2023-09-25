import { Component, Input } from '@angular/core';
import { Note } from '../note'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() note: Note = {
    id: 0,
    title: "AAAAAA",
    content: "test",
    type: "type1"
  }
}
