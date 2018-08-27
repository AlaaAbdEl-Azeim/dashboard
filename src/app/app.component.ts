import { Component, Input, ViewChild, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  @ViewChild('slideshow') slideshow;
  public index=0;
  
  //array of slider elements
  imageUrlArray=[{url:'/assets/images/img1.jpg',title:"Welcome to a more connected world",subTitle:"Travel soothes the soul and our collection royalty",linkUrl:"#"},
{url:'/assets/images/img2.jpg',title:"From the earth to the sky",subTitle:"Aspiration and achievement",linkUrl:"#"},
{url:'/assets/images/img3.jpg',title:"Welcome to a more connected world",subTitle:"Travel soothes the soul and our collection royalty",linkUrl:"#"}];

ngOnInit() {
}
//event to set the index variable with the slider index when the slider swipe
onSlide=function (i){
  this.index=i;
}

}
