import { Component, OnInit } from '@angular/core';
import { faHamburger, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  icon = faHamburger;
  constructor() { }

  ngOnInit(): void {
  }

}
