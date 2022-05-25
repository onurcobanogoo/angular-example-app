import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() btnText: string = 'Button';
  @Input() type: string = 'button';
  @Input() isDisabled: boolean = false;
  @Input() btnClasses: string[] = [];

  @Output() btnClick = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }
}
