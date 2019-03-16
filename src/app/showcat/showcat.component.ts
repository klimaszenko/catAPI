import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'showcat',
  templateUrl: './showcat.component.html',
  styleUrls: ['./showcat.component.css']
})
export class ShowcatComponent implements OnInit {

  constructor(public ApiService: ApiService) { }

  ngOnInit() {
    this.ApiService.getData();
  }

  refreshCat(){
    this.ApiService.getData();
  }

}
