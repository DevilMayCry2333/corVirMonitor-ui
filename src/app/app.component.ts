import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  cityName: string;
  currentConfirmedCount: number;
  confirmedCount: number;
  curedCount: string;
  suspectedCount: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {
  title = 'hello';
  displayedColumns: string[] = ['cityName', 'currentConfirmedCount', 'confirmedCount', 'curedCount','suspectedCount'];
  dataSource=[];

  constructor(private http: HttpClient){
    
  }
  ngOnInit(){
    console.log("hello");
    this.http.get<PeriodicElement>("https://youkaiyu.com:8443/").subscribe((res)=>{
      ELEMENT_DATA.push(res);
      this.dataSource = ELEMENT_DATA;
      console.log(this.dataSource);
      console.log(res);
    })
  }

}
