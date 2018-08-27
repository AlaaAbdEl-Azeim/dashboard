import { Component, OnInit } from '@angular/core';
declare var require: any
let NewsAPI = require('newsapi');
let newsapi = new NewsAPI('a7f4e498f76349efa3504c9a5899671d');

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  constructor() { }

  public data_source = [];
  public data_filter = [];
  ngOnInit() {
    // To query /v2/top-headlines from newsapi.org
    newsapi.v2.topHeadlines({
      language: 'en'
    }).then(response => {
      this.data_filter = this.data_source = response.articles;
    }).catch(function (err) {
      console.log(err);
    });
  }

  search_articles(e, data) {//search for news result that match the entered data with at least 2 characters
    let val = e.target.value;
    let minChar = 2;
    this.data_filter = val.length < minChar ? this.data_source : data.filter(article => article.title.toLowerCase().includes(val.toLowerCase()))
    return true;
  }
}