import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitDatInfoService {

  constructor(
    private http: HttpClient
  ) { }

    endpoint: string = 'https://pokeapi.co/api/v2/';

    searchPokemon(name: string): Observable<any> {
      return this.http.get<any>(this.endpoint + 'pokemon/' + name.toLowerCase())
    }
}
