import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import {MatCardModule} from '@angular/material';
import {LoginComponent} from '../login/login/login.component';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  { path: '', component: NotesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [NotesComponent]
})
export class NotesModule { }
