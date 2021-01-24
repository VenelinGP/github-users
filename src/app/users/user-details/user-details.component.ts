import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})


export class UserDetailsComponent implements OnInit {
  @Input() currentUser: any;
  @Output() newBackgroundColor = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  isChanged(val: boolean){
    this.newBackgroundColor.emit(val);
  }

}
