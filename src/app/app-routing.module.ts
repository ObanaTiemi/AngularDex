import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NationalDexComponent} from './national-dex/national-dex.component'
import {PokemonComponent} from './pokemon/pokemon.component'


const routes: Routes = [
  {path: '', component: NationalDexComponent},
  {path: ':name', component: PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
