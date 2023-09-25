import { Component } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private service: NoteService) { }
  ngOnInit(): void {
    this.service.list()
  }
  noteList = [
    {
      id: 0,
      title: "forte abraço",
      content: "AI CALICA",
      type: "type2"
    }
  ];
}
