import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword = "";
  highlight = true;
  fontSize = 12;
  redColor = 'red'

  @Output() keywordChange = new EventEmitter<String>();

  constructor() {

  }

  ngOnInit(): void {
  }

  search($event){
    console.log('>>>>>> Search Start !', $event);
    this.highlight = !this.highlight;
    console.log('>>>>>> Search highlight !', this.highlight);
    this.fontSize++;
    this.keywordChange.emit(this.keyword);

  }

  changeKeywordHandler($event){
    console.log('>>>>>> changeKeywordHandler Start !', $event.target.value);
    var value = $event.target.value;
    this.keyword = value;

  }

}
