import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Item } from "../item";

@Component({
  selector: "app-com1",
  templateUrl: "./com1.component.html",
  styleUrls: ["./com1.component.css"]
})
export class Com1Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() item1: Item;

  @Output() count = new EventEmitter<number>();

  sendCount(c: number) {
    this.count.emit(c);
  }
}
