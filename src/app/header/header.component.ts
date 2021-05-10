import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword = "";
  highlight = true;
  constructor() {

  }

  ngOnInit(): void {
  }

  search($event){
    console.log('>>>>>> Search Start !', $event);
    this.highlight = !this.highlight;
    console.log('>>>>>> Search highlight !', this.highlight);
  }

  changeKeywordHandler($event){
    console.log('>>>>>> changeKeywordHandler Start !', $event.target.value);
    var value = $event.target.value;
    this.keyword = value;

  }

}
