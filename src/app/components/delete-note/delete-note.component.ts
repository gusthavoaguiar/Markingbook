import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.css']
})
export class DeleteNoteComponent {
  constructor(
    private service: NoteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getNoteId(parseInt(id!)).subscribe((note) =>{
      	this.note = note
    })
  }

  cancel(){
    this.router.navigate(['/home'])
  }

  deleteNote(){
    if(this.note.id){
      this.service.delete(this.note.id).subscribe(() => {
        this.router.navigate(['/home'])
      })
    }
  }


  note: Note = {
    title: "",
    content: "",
    type: ""
  }

}
