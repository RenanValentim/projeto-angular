import { Component, OnInit } from '@angular/core';
import { RegisterClock } from 'src/app/model/register-clock';

@Component({
  selector: 'app-register-clock',
  templateUrl: './register-clock.component.html',
  styleUrls: ['./register-clock.component.css']
})
export class RegisterClockComponent implements OnInit {

  registros: RegisterClock[]; 

  constructor() { }

  ngOnInit(): void {
  }

}
