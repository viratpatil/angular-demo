import { Component, OnInit } from '@angular/core';

export interface View {
  name: string;
  key: string;
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  views: View[] = [
    {
      name: 'Read Me',
      key: 'readme'
    },
    {
      name: 'Maps',
      key: 'maps'
    },
    {
      name: 'Work',
      key: 'work'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onListClick(view: View) {
    console.log(view);
  }

}
