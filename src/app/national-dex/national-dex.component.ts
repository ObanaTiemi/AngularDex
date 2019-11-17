import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service'

@Component({
  selector: 'app-national-dex',
  templateUrl: './national-dex.component.html',
  styleUrls: ['./national-dex.component.scss']
})
export class NationalDexComponent implements OnInit {

  pokemons: any

  constructor(
    private pokemonService: PokemonService){}


  async ngOnInit() {
    var pokemons = await this.pokemonService.listPokemon()
    this.pokemons = pokemons['results']
    console.log(this.pokemons)
  }

}
