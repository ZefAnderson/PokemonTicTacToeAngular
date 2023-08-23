import { Component, OnInit } from '@angular/core';
import { GitDatInfoService } from '../git-dat-info.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  constructor (private gitDatInfo: GitDatInfoService) {}

  theFirstOne: string = 'umbreon';
  apiResponse: string = '';

  ngOnInit() {
    this.search(this.theFirstOne);
  }

  search(name: string){
    this.gitDatInfo.searchPokemon(name).subscribe(
      (res: any) => this.apiResponse = JSON.stringify(res)
    );
  }
}
