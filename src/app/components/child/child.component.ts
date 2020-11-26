import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    if (value == '') {
      alert('Write something');
    } else this.newItemEvent.emit(value);

    console.log(
      'From ChildComponent! Outputted values:,',
      value,
      this.newItemEvent
    );
  }

  constructor() {}

  ngOnInit(): void {}
}
