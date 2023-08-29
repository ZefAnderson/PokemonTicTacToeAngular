import { Component, OnInit } from '@angular/core';
import { GitDatInfoService } from '../git-dat-info.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    formBuilder: FormBuilder)
    {
      this.form = formBuilder.group({
        searchTerm: ['Umbreon']
      });
    }

  ngOnInit(){
    this.search();
  }

  search(){
    let name = this.form.controls['searchTerm'].value;
    this.imageArray = [];
    this.gitDatInfo.searchPokemon(name).subscribe(
      (res: any) => {
        this.apiResponse = JSON.stringify(res);
      
        this.imageArray.push(res.sprites.front_default);
        this.imageArray.push(res.sprites.back_default);
        this.imageArray.push(res.sprites.front_shiny);
        this.imageArray.push(res.sprites.back_shiny);

        console.log("Image Array:" + this.imageArray)
      } );
  }

}