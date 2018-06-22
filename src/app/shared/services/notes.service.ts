import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASEURL} from '../../const';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notesUrl = `${BASEURL}notes/`;
  private notesByUserUrl = `${BASEURL}notes/by_user/`;

  constructor(private http: HttpClient) {
  }

  getNotesByUser(userid: number) {
    return this.http.get(`${this.notesByUserUrl}${userid}/`);
  }

  createNote(body) {
    return this.http.post(this.notesUrl, body);
  }
}
