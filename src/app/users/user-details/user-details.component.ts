import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class UserDetailsComponent implements OnInit {
  @Input() currentUser: any;
  @Input() rating: number | undefined;
  
  @Output() newBackgroundColor = new EventEmitter<boolean>();
  
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.rating);
  }

  isChanged(val: boolean){
    this.newBackgroundColor.emit(val);
  }

}
