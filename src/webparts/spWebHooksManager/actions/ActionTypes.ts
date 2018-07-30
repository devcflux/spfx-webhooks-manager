export enum SubscriptionActionTypes {
  UPDATE_PROPERTY = 'UPDATE_PROPERTY',
  APPLY_PROPERTIES = 'APPLY_PROPERTIES',
  GET_SUBSCRIPTIONS_SUCCESS = 'GET_SUBSCRIPTIONS_SUCCESS',
  GET_SUBSCRIPTIONS_ERROR = 'GET_SUBSCRIPTIONS_ERROR',
  SHOW_ERROR_DIALOG = 'SHOW_ERROR_DIALOG'
}

export enum AddSubscriptionActionTypes {
  UPDATE_NEW_PROPERTY = 'UPDATE_NEW_PROPERTY',
  ADD_SUBSCRIPTION_SUCCESS = 'ADD_SUBSCRIPTION_SUCCESS',
  ADD_SUBSCRIPTION_ERROR = 'ADD_SUBSCRIPTION_ERROR',
  SHOW_ADD_PANEL = 'SHOW_ADD_PANEL',
  RESET_ADD_SUBSCRIPTION = 'RESET_ADD_SUBSCRIPTION'
}

export enum EditSubscriptionActionTypes {
  UPDATE_EXISTING_PROPERTY = 'UPDATE_EXISTING_PROPERTY',
  EDIT_SUBSCRIPTION_SUCCESS = 'EDIT_SUBSCRIPTION_SUCCESS',
  EDIT_SUBSCRIPTION_ERROR = 'EDIT_SUBSCRIPTION_ERROR',
  SHOW_EDIT_PANEL = 'SHOW_EDIT_PANEL',
  RESET_EDIT_SUBSCRIPTION = 'RESET_EDIT_SUBSCRIPTION'
}

export enum DeleteSubscriptionActionTypes {
  UPDATE_EXISTING_PROPERTY = 'UPDATE_EXISTING_PROPERTY',
  DELETE_SUBSCRIPTION_SUCCESS = 'EDIT_SUBSCRIPTION_SUCCESS',
  DELETE_SUBSCRIPTION_ERROR = 'EDIT_SUBSCRIPTION_ERROR',
  SHOW_DELETE_DIALOG = 'SHOW_DELETE_DIALOG'
}
