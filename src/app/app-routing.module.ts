import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LittlesidebarComponent } from './components/littlesidebar/littlesidebar.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'create-note',
    component: CreateNoteComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
