import { Component, Input } from '@angular/core';
import { note } from '../note'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() note: note = {
    id: 0,
    title: "AAAAAA",
    content: "test",
    type: "type1"
  }
}
