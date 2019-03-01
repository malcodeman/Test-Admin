import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-search",
  templateUrl: "./home-search.component.html",
  styleUrls: ["./home-search.component.css"]
})
export class HomeSearchComponent implements OnInit {
  username: string = "";

  handleOnChange(e) {
    this.username = e.target.value;
  }

  constructor() {}

  ngOnInit() {}
}