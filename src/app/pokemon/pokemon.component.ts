import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {PokemonService} from '../pokemon.service'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  name: string
  pokemon: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) { 
      this.name = this.activatedRoute.snapshot.paramMap.get("name")
  }

  async ngOnInit() {
    let pokemon = await this.pokemonService.getPokemon(this.name)
    this.pokemon = pokemon
    console.log(this.pokemon)
  }
}
