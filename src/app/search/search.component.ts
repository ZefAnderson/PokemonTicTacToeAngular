import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GitDatInfoService } from '../git-dat-info.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CacheDatInfoService } from '../cache-dat-info.service';
import { Player } from '../player';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  form: FormGroup;
  formBuilder: FormBuilder = new FormBuilder; 
  
  apiResponse: string = '';
  imageArray: string[] = [];

  constructor (
    private gitDatInfo: GitDatInfoService,
    private cacheDatInfo: CacheDatInfoService, 
    formBuilder: FormBuilder,
    private route: ActivatedRoute)
    {
      this.form = formBuilder.group({
        searchTerm: ['Umbreon']
      });
    }

  ngOnInit(){
    this.getPlayer();
    this.search();
  }

  getPlayer() {
    const player = Number(this.route.snapshot.paramMap.get('id'));
  }

  selectImage(imageUrl: string){
    let playerId: Number = Number(this.route.snapshot.paramMap.get('player'));
    let player = new Player(playerId, imageUrl) 
    this.cacheDatInfo.savePlayerData

  }

  search(){
    let name = this.form.controls['searchTerm'].value;
    this.imageArray = [];
    this.gitDatInfo.searchPokemon(name).subscribe(
      (res: any) => {
        // this.apiResponse = JSON.stringify(res);
      
        if (res.sprites.front_default) this.imageArray.push(res.sprites.front_default);
        if (res.sprites.back_default) this.imageArray.push(res.sprites.back_default);
        if (res.sprites.front_shiny) this.imageArray.push(res.sprites.front_shiny);
        if (res.sprites.back_shiny) this.imageArray.push(res.sprites.back_shiny);
        if (res.sprites.front_female) this.imageArray.push(res.sprites.front_female);
        if (res.sprites.back_female) this.imageArray.push(res.sprites.back_female);
        if (res.sprites.front_shiny_female) this.imageArray.push(res.sprites.front_shiny_female);
        if (res.sprites.back_shiny_female) this.imageArray.push(res.sprites.back_shiny_female);
        console.log("Image Array:" + this.imageArray)
      } );
  }

}