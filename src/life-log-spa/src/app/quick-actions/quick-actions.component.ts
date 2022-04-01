import { Component, OnInit } from '@angular/core';
import { faUmbrella } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss']
})
export class QuickActionsComponent implements OnInit {
  faCoffee = faUmbrella;
  constructor() { }

  ngOnInit(): void {
  }

}
