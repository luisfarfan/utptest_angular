import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {LoginComponent} from '../login/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { NewNoteComponent } from './new-note/new-note.component';
import {ReactiveFormsModule} from '@angular/forms';


const appRoutes: Routes = [
  { path: '', component: NotesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [NotesComponent, NewNoteComponent]
})
export class NotesModule { }
