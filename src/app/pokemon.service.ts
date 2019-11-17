import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url: string = 'https://pokeapi.co/api/v2/pokemon'
  urlPaginate: string = 'https://pokeapi.co/api/v2/pokemon/?limit=150'
  pokemons: any

  constructor(private http: HttpClient) { }

  async listPokemon() {
    return this.http.get(this.urlPaginate).toPromise()
  }

  async getPokemon(name: string) {
    return await this.http.get(`${this.url}/${name}`).toPromise()
  }

}
