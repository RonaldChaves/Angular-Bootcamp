import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { link } from '../environment';
import { Observable } from 'rxjs';
import { PokemonData } from "../models/pokemondata";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL: string = '';
  private pokeData: PokemonData | any;

  constructor(private http: HttpClient) {
    this.baseURL = link.pokeApi;
  }

  getPokemon(pokemonName: string): Observable<PokemonData> {
    this.pokeData = this.http.get<PokemonData>
      (`${this.baseURL}${pokemonName}`);
      
    return this.pokeData;
  }
}
