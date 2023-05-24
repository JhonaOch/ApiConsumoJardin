import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesApiService {

  apiKe="https://desarrollo.gti.fin.ec/boton-web-api-ws-1.0/coopagos/web/public/"
  apiInstitution =
    'institution';

    apiLogin =
    'login ';

  constructor(private http: HttpClient) {}

  getInstitution() {
    return this.http.get(`${this.apiKe}${this.apiInstitution}`);
  }





  login(username: string, password: string) {
    const body = { username, password };

    return this.http.post(`${this.apiKe}${this.apiLogin}`, body);
  }
}
