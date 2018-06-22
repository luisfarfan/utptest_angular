import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'notes', loadChildren: './notes/notes.module#NotesModule'}];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
