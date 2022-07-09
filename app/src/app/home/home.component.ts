import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logo:any = {
    "Logo": [
      "assets/img/upc.png",
      "assets/img/play.png",
      "assets/img/vectra.png",
      "assets/img/plus.png",
      "assets/img/tmobile.png",
    ],

    "Link":[
      "https://www.upc.pl/",
      "https://www.play.pl/",
      "https://www.vectra.pl/",
      "https://www.plus.pl/",
      "https://www.t-mobile.pl/",
    ]
  };

  user:any = {
    "Name":[
      "Jan Kowalski",
      "Jan Kowalski",
      "Jan Kowalski",
    ],
    "Description": [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem been the industry’s standard dummy text ever since the 1500s",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem been the industry’s standard dummy text ever since the 1500s",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem been the industry’s standard dummy text ever since the 1500s",
    ]


  }

  constructor() { }

  ngOnInit(): void {
  }

  isShowGroup3 = false;
  isShowGroup4 = false;
 
  displayGroup3() {
    this.isShowGroup3 = !this.isShowGroup3;
  }

  displayGroup4() {
    this.isShowGroup4 = !this.isShowGroup4;
  }
}
