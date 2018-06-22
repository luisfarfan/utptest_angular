import {Component, OnInit} from '@angular/core';
import {IAuthResponse} from '../../shared/interfaces/auth.interface';
import {NotesService} from '../../shared/services/notes.service';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  authUser: IAuthResponse;

  notesbyUser: any;

  constructor(private notesService: NotesService, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.authUser = JSON.parse(localStorage.getItem('auth'));
    if (this.authUser) {
      this.getNotes(this.authUser.id);
    } else {
      this.router.navigate(['login']);
    }
  }


  getNotes(userid: number) {
    this.notesService.getNotesByUser(userid).subscribe((response) => {
      this.notesbyUser = response;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
