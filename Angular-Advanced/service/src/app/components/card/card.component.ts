import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemondata';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  pokemon: PokemonData = {
    id: 0,
    name: '',
    sprites: {
      front_default: ''
    },
    types: []
  }

  constructor(
    private service: PokemonService,
  ) { }

  ngOnInit() {
    this.getPokemon('pikachu'); //default
  }

  getPokemon(searchName: string) {
    this.service.getPokemon(searchName).subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
      },
      error: () => console.log('not found')
    })
  }

  getName() {
    const input: any = document.querySelector('.input');
    this.getPokemon(input.value);
    input.value = '';
  }

}
