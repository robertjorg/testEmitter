import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lower-button',
  templateUrl: './lower-button.component.html',
  styleUrls: ['./lower-button.component.scss']
})
export class LowerButtonComponent implements OnInit {

  message: string;

  @Output()
  emitterSent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.message = 'You sent a message';
  }

  emitMe(): any {
    this.emitterSent.emit(this.message);
  }

}
