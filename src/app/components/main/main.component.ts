import { Component } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private service: NoteService) { }
  ngOnInit(): void {
    this.service.list().subscribe((noteList) => {
      this.noteList = noteList
    })
  }

  noteList: Note[] = [];
}
