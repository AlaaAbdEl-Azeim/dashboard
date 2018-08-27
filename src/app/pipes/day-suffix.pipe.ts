import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daySuffix'
})
export class DaySuffixPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let suufix;
    let date=new Date(value);
    let day=date.getDate();
    if (day >= 11 && day <= 13) {
      suufix = "th";
    }
    switch (day % 10) {
      case 1: suufix = "st";
      case 2: suufix = "nd";
      case 3: suufix = "rd";
      default: suufix = "th";
    }
    return day +suufix+" "+ date.toLocaleString("en-us", { month: "long" }) +" " + date.getFullYear();
  }

}
