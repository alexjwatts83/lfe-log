export interface QuickActionsAction<T> {
  name: string;
  defaultValue: T
}

export interface QuickActions {
  groupTitle: string;
  actions: QuickActionsAction<number>[];
}