import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  noteList= [
    {
      title: "forte abraço",
      content: "AI CALICA",
      type: "type2"
    }
  ];
}
