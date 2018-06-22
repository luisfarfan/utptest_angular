import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASEURL} from '../../const';
import {IAuthBody, IAuthResponse} from '../interfaces/auth.interface';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = `${BASEURL}authenticate/`;

  constructor(private http: HttpClient) {
  }

  authenticate(body: IAuthBody): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(this.authUrl, body).pipe(tap((r) => {
      localStorage.setItem('auth', JSON.stringify(r));
    }));
  }

  logout() {
    localStorage.removeItem('auth');
  }
}
