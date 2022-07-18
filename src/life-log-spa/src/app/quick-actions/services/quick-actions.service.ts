import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuickActions, QuickActionsAction } from '../models';

@Injectable({
  providedIn: 'root'
})
export class QuickActionsService {
  private data: QuickActions[] = [];
  private _quickActions: BehaviorSubject<QuickActions[]>;

  constructor() { 
    this.data = [
      {
        groupTitle: 'Medical',
        actions: [
          {
            defaultValue: 2,
            name: 'Panandol'
          } as QuickActionsAction<number>
        ]
      } as QuickActions
    ];
    this._quickActions = new BehaviorSubject<QuickActions[]>(this.data);
  }

  getQuickActions() {
    return this._quickActions.asObservable();
  }

  setQuickActions(quickActions: QuickActions[]) {
    this._quickActions.next(quickActions);
  }
}
