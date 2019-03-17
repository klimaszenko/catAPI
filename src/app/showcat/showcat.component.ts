import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'showcat',
  templateUrl: './showcat.component.html',
  styleUrls: ['./showcat.component.css']
})
export class ShowcatComponent implements OnInit {

  constructor(public ApiService: ApiService) { }
  gifsAreSelected:boolean;
  showURL:boolean;

  ngOnInit() {
    this.ApiService.getData();
    this.gifsAreSelected = true;
    this.showURL=true;
  }

  refreshCat(){
    this.ApiService.getData();
  }

  changeGifSelection(gifsAreSelected){
    console.log(gifsAreSelected);
    this.ApiService.setAPIurl(gifsAreSelected);
  }

}
