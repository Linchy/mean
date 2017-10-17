import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',  // <home></home>
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
    public list;

    constructor() {
      this.list = [
        { title: "a", items: [{ title: "b" }] },
        { title: "dd", items: [{ title: "cc" }] },
      ];
    }
}