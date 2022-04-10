import { Component, OnInit } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { QuickActions } from './models';
import { QuickActionsService } from './services/quick-actions.service';

@Component({
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss']
})
export class QuickActionsComponent implements OnInit {
  faPlus = faPlus;
  faMinus = faMinus;
  quickActions: QuickActions[] = [];

  constructor(private quickActionsService: QuickActionsService) { }

  ngOnInit(): void {
  }

}
